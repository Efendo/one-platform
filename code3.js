gdjs._52Code = {};
gdjs._52Code.GDThank_9595you_9595for_9595playing_9595Objects1= [];
gdjs._52Code.GDThank_9595you_9595for_9595playing_9595Objects2= [];
gdjs._52Code.GDNewSpriteObjects1= [];
gdjs._52Code.GDNewSpriteObjects2= [];
gdjs._52Code.GDNewTextObjects1= [];
gdjs._52Code.GDNewTextObjects2= [];
gdjs._52Code.GDNewText2Objects1= [];
gdjs._52Code.GDNewText2Objects2= [];
gdjs._52Code.GDPlayerObjects1= [];
gdjs._52Code.GDPlayerObjects2= [];
gdjs._52Code.GDGROUND_9595BASEObjects1= [];
gdjs._52Code.GDGROUND_9595BASEObjects2= [];
gdjs._52Code.GDNewTiledSpriteObjects1= [];
gdjs._52Code.GDNewTiledSpriteObjects2= [];
gdjs._52Code.GDGoalObjects1= [];
gdjs._52Code.GDGoalObjects2= [];
gdjs._52Code.GDRetryObjects1= [];
gdjs._52Code.GDRetryObjects2= [];
gdjs._52Code.GDGROUND_9595CASTLEObjects1= [];
gdjs._52Code.GDGROUND_9595CASTLEObjects2= [];
gdjs._52Code.GDSpikeObjects1= [];
gdjs._52Code.GDSpikeObjects2= [];


gdjs._52Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._52Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._52Code.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs._52Code.GDNewText2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._52Code.GDNewText2Objects1[k] = gdjs._52Code.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs._52Code.GDNewText2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Cipher2(chosic.com).mp3", true, 100, 1);
}}

}


};

gdjs._52Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._52Code.GDThank_9595you_9595for_9595playing_9595Objects1.length = 0;
gdjs._52Code.GDThank_9595you_9595for_9595playing_9595Objects2.length = 0;
gdjs._52Code.GDNewSpriteObjects1.length = 0;
gdjs._52Code.GDNewSpriteObjects2.length = 0;
gdjs._52Code.GDNewTextObjects1.length = 0;
gdjs._52Code.GDNewTextObjects2.length = 0;
gdjs._52Code.GDNewText2Objects1.length = 0;
gdjs._52Code.GDNewText2Objects2.length = 0;
gdjs._52Code.GDPlayerObjects1.length = 0;
gdjs._52Code.GDPlayerObjects2.length = 0;
gdjs._52Code.GDGROUND_9595BASEObjects1.length = 0;
gdjs._52Code.GDGROUND_9595BASEObjects2.length = 0;
gdjs._52Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._52Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._52Code.GDGoalObjects1.length = 0;
gdjs._52Code.GDGoalObjects2.length = 0;
gdjs._52Code.GDRetryObjects1.length = 0;
gdjs._52Code.GDRetryObjects2.length = 0;
gdjs._52Code.GDGROUND_9595CASTLEObjects1.length = 0;
gdjs._52Code.GDGROUND_9595CASTLEObjects2.length = 0;
gdjs._52Code.GDSpikeObjects1.length = 0;
gdjs._52Code.GDSpikeObjects2.length = 0;

gdjs._52Code.eventsList0(runtimeScene);

return;

}

gdjs['_52Code'] = gdjs._52Code;
