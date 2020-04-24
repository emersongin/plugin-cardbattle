
/**
 * @GLOBALS
 * 
 */
var $dataCards = null;
var $dataChallenges = null;
var $gameCardPlayer = null;

/**
 * load data for cardbattle.
 */
DataManager._databaseFiles.push(
    {
        name: '$dataCards',
        src: 'cardbattle/Cards.json'
    },
    {
        name: '$dataChallenges',
        src: 'cardbattle/Challenges.json'
    }
);

/**
 * @overwrite
 * 
 * create new objects for cardbattle.
 */
var DataManager_createGameObjects = DataManager.createGameObjects;

DataManager.createGameObjects = function() {
    DataManager_createGameObjects();
    $gameCardPlayer = new GameCardPlayer();

};

/**
 * @overwrite
 * @return 
 * 
 * make extra content for save cardbatte data.
 */
var DataManager_makeSaveContents = DataManager.makeSaveContents;

DataManager.makeSaveContents = function() {
    var contents = DataManager_makeSaveContents();
    contents.cardPlayer = $gameCardPlayer;
    
    return contents;
};

/**
 * @overwrite
 * 
 * load extra data for cardbattle.
 */
var DataManager_extractSaveContents = DataManager.extractSaveContents;

DataManager.extractSaveContents = function(contents) {
    DataManager_extractSaveContents(contents);
    $gameCardPlayer = contents.cardPlayer;

};