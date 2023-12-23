gdjs._49Code = {};
gdjs._49Code.GDintro1Objects1= [];
gdjs._49Code.GDintro1Objects2= [];
gdjs._49Code.GDintro1Objects3= [];
gdjs._49Code.GDintro2Objects1= [];
gdjs._49Code.GDintro2Objects2= [];
gdjs._49Code.GDintro2Objects3= [];
gdjs._49Code.GDintro3Objects1= [];
gdjs._49Code.GDintro3Objects2= [];
gdjs._49Code.GDintro3Objects3= [];
gdjs._49Code.GDcntrlObjects1= [];
gdjs._49Code.GDcntrlObjects2= [];
gdjs._49Code.GDcntrlObjects3= [];
gdjs._49Code.GDPlayerObjects1= [];
gdjs._49Code.GDPlayerObjects2= [];
gdjs._49Code.GDPlayerObjects3= [];
gdjs._49Code.GDGROUND_9595BASEObjects1= [];
gdjs._49Code.GDGROUND_9595BASEObjects2= [];
gdjs._49Code.GDGROUND_9595BASEObjects3= [];
gdjs._49Code.GDNewTiledSpriteObjects1= [];
gdjs._49Code.GDNewTiledSpriteObjects2= [];
gdjs._49Code.GDNewTiledSpriteObjects3= [];
gdjs._49Code.GDGoalObjects1= [];
gdjs._49Code.GDGoalObjects2= [];
gdjs._49Code.GDGoalObjects3= [];
gdjs._49Code.GDRetryObjects1= [];
gdjs._49Code.GDRetryObjects2= [];
gdjs._49Code.GDRetryObjects3= [];
gdjs._49Code.GDGROUND_9595CASTLEObjects1= [];
gdjs._49Code.GDGROUND_9595CASTLEObjects2= [];
gdjs._49Code.GDGROUND_9595CASTLEObjects3= [];
gdjs._49Code.GDSpikeObjects1= [];
gdjs._49Code.GDSpikeObjects2= [];
gdjs._49Code.GDSpikeObjects3= [];


gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._49Code.GDPlayerObjects2});
gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDGoalObjects2Objects = Hashtable.newFrom({"Goal": gdjs._49Code.GDGoalObjects2});
gdjs._49Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs._49Code.GDGoalObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects2Objects, gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDGoalObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene)) + 1), false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs._49Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._49Code.GDPlayerObjects2[0].getPointX("")), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, ((( gdjs._49Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._49Code.GDPlayerObjects2[0].getPointY("")) - 150), "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs._49Code.GDGoalObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs._49Code.GDRetryObjects2);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects2[i].getBehavior("Scale").setScale(0.5);
}
}{for(var i = 0, len = gdjs._49Code.GDGoalObjects2.length ;i < len;++i) {
    gdjs._49Code.GDGoalObjects2[i].getBehavior("Scale").setScale(2.5);
}
}{for(var i = 0, len = gdjs._49Code.GDRetryObjects2.length ;i < len;++i) {
    gdjs._49Code.GDRetryObjects2[i].getBehavior("Scale").setScale(0.5);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Cipher2(chosic.com).mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs._49Code.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDRetryObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDRetryObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDRetryObjects1[k] = gdjs._49Code.GDRetryObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDRetryObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs._49Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs._49Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDintro1Objects1.length = 0;
gdjs._49Code.GDintro1Objects2.length = 0;
gdjs._49Code.GDintro1Objects3.length = 0;
gdjs._49Code.GDintro2Objects1.length = 0;
gdjs._49Code.GDintro2Objects2.length = 0;
gdjs._49Code.GDintro2Objects3.length = 0;
gdjs._49Code.GDintro3Objects1.length = 0;
gdjs._49Code.GDintro3Objects2.length = 0;
gdjs._49Code.GDintro3Objects3.length = 0;
gdjs._49Code.GDcntrlObjects1.length = 0;
gdjs._49Code.GDcntrlObjects2.length = 0;
gdjs._49Code.GDcntrlObjects3.length = 0;
gdjs._49Code.GDPlayerObjects1.length = 0;
gdjs._49Code.GDPlayerObjects2.length = 0;
gdjs._49Code.GDPlayerObjects3.length = 0;
gdjs._49Code.GDGROUND_9595BASEObjects1.length = 0;
gdjs._49Code.GDGROUND_9595BASEObjects2.length = 0;
gdjs._49Code.GDGROUND_9595BASEObjects3.length = 0;
gdjs._49Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._49Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._49Code.GDNewTiledSpriteObjects3.length = 0;
gdjs._49Code.GDGoalObjects1.length = 0;
gdjs._49Code.GDGoalObjects2.length = 0;
gdjs._49Code.GDGoalObjects3.length = 0;
gdjs._49Code.GDRetryObjects1.length = 0;
gdjs._49Code.GDRetryObjects2.length = 0;
gdjs._49Code.GDRetryObjects3.length = 0;
gdjs._49Code.GDGROUND_9595CASTLEObjects1.length = 0;
gdjs._49Code.GDGROUND_9595CASTLEObjects2.length = 0;
gdjs._49Code.GDGROUND_9595CASTLEObjects3.length = 0;
gdjs._49Code.GDSpikeObjects1.length = 0;
gdjs._49Code.GDSpikeObjects2.length = 0;
gdjs._49Code.GDSpikeObjects3.length = 0;

gdjs._49Code.eventsList1(runtimeScene);

return;

}

gdjs['_49Code'] = gdjs._49Code;
