gdjs._51Code = {};
gdjs._51Code.GDintro1Objects1= [];
gdjs._51Code.GDintro1Objects2= [];
gdjs._51Code.GDintro1Objects3= [];
gdjs._51Code.GDintro2Objects1= [];
gdjs._51Code.GDintro2Objects2= [];
gdjs._51Code.GDintro2Objects3= [];
gdjs._51Code.GDintro3Objects1= [];
gdjs._51Code.GDintro3Objects2= [];
gdjs._51Code.GDintro3Objects3= [];
gdjs._51Code.GDintro4Objects1= [];
gdjs._51Code.GDintro4Objects2= [];
gdjs._51Code.GDintro4Objects3= [];
gdjs._51Code.GDPlayerObjects1= [];
gdjs._51Code.GDPlayerObjects2= [];
gdjs._51Code.GDPlayerObjects3= [];
gdjs._51Code.GDGROUND_9595BASEObjects1= [];
gdjs._51Code.GDGROUND_9595BASEObjects2= [];
gdjs._51Code.GDGROUND_9595BASEObjects3= [];
gdjs._51Code.GDNewTiledSpriteObjects1= [];
gdjs._51Code.GDNewTiledSpriteObjects2= [];
gdjs._51Code.GDNewTiledSpriteObjects3= [];
gdjs._51Code.GDGoalObjects1= [];
gdjs._51Code.GDGoalObjects2= [];
gdjs._51Code.GDGoalObjects3= [];
gdjs._51Code.GDRetryObjects1= [];
gdjs._51Code.GDRetryObjects2= [];
gdjs._51Code.GDRetryObjects3= [];
gdjs._51Code.GDGROUND_9595CASTLEObjects1= [];
gdjs._51Code.GDGROUND_9595CASTLEObjects2= [];
gdjs._51Code.GDGROUND_9595CASTLEObjects3= [];
gdjs._51Code.GDSpikeObjects1= [];
gdjs._51Code.GDSpikeObjects2= [];
gdjs._51Code.GDSpikeObjects3= [];


gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs._51Code.GDPlayerObjects2});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDGoalObjects2Objects = Hashtable.newFrom({"Goal": gdjs._51Code.GDGoalObjects2});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDSpikeObjects1Objects = Hashtable.newFrom({"Spike": gdjs._51Code.GDSpikeObjects1});
gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._51Code.GDPlayerObjects1});
gdjs._51Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs._51Code.GDGoalObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDPlayerObjects2Objects, gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDGoalObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.common.toString(gdjs.evtTools.common.toNumber(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene)) + 1), false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointX("")), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, ((( gdjs._51Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs._51Code.GDPlayerObjects2[0].getPointY("")) - 150), "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs._51Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs._51Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs._51Code.GDGoalObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs._51Code.GDRetryObjects2);
{for(var i = 0, len = gdjs._51Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects2[i].getBehavior("Scale").setScale(0.5);
}
}{for(var i = 0, len = gdjs._51Code.GDGoalObjects2.length ;i < len;++i) {
    gdjs._51Code.GDGoalObjects2[i].getBehavior("Scale").setScale(2.5);
}
}{for(var i = 0, len = gdjs._51Code.GDRetryObjects2.length ;i < len;++i) {
    gdjs._51Code.GDRetryObjects2[i].getBehavior("Scale").setScale(0.5);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Cipher2(chosic.com).mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs._51Code.GDRetryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDRetryObjects2.length;i<l;++i) {
    if ( gdjs._51Code.GDRetryObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDRetryObjects2[k] = gdjs._51Code.GDRetryObjects2[i];
        ++k;
    }
}
gdjs._51Code.GDRetryObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._51Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs._51Code.GDSpikeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDSpikeObjects1Objects, gdjs._51Code.mapOfGDgdjs_9546_959551Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._51Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._51Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._51Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs._51Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs._51Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._51Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51Code.GDintro1Objects1.length = 0;
gdjs._51Code.GDintro1Objects2.length = 0;
gdjs._51Code.GDintro1Objects3.length = 0;
gdjs._51Code.GDintro2Objects1.length = 0;
gdjs._51Code.GDintro2Objects2.length = 0;
gdjs._51Code.GDintro2Objects3.length = 0;
gdjs._51Code.GDintro3Objects1.length = 0;
gdjs._51Code.GDintro3Objects2.length = 0;
gdjs._51Code.GDintro3Objects3.length = 0;
gdjs._51Code.GDintro4Objects1.length = 0;
gdjs._51Code.GDintro4Objects2.length = 0;
gdjs._51Code.GDintro4Objects3.length = 0;
gdjs._51Code.GDPlayerObjects1.length = 0;
gdjs._51Code.GDPlayerObjects2.length = 0;
gdjs._51Code.GDPlayerObjects3.length = 0;
gdjs._51Code.GDGROUND_9595BASEObjects1.length = 0;
gdjs._51Code.GDGROUND_9595BASEObjects2.length = 0;
gdjs._51Code.GDGROUND_9595BASEObjects3.length = 0;
gdjs._51Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._51Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._51Code.GDNewTiledSpriteObjects3.length = 0;
gdjs._51Code.GDGoalObjects1.length = 0;
gdjs._51Code.GDGoalObjects2.length = 0;
gdjs._51Code.GDGoalObjects3.length = 0;
gdjs._51Code.GDRetryObjects1.length = 0;
gdjs._51Code.GDRetryObjects2.length = 0;
gdjs._51Code.GDRetryObjects3.length = 0;
gdjs._51Code.GDGROUND_9595CASTLEObjects1.length = 0;
gdjs._51Code.GDGROUND_9595CASTLEObjects2.length = 0;
gdjs._51Code.GDGROUND_9595CASTLEObjects3.length = 0;
gdjs._51Code.GDSpikeObjects1.length = 0;
gdjs._51Code.GDSpikeObjects2.length = 0;
gdjs._51Code.GDSpikeObjects3.length = 0;

gdjs._51Code.eventsList1(runtimeScene);

return;

}

gdjs['_51Code'] = gdjs._51Code;
