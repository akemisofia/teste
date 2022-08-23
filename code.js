var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a605e7c2-8a2c-4c4a-86fa-04867d404901","368c7c02-6850-476a-9d44-3cf43cf82932"],"propsByKey":{"a605e7c2-8a2c-4c4a-86fa-04867d404901":{"name":"palhaco","sourceUrl":null,"frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"MhCExECoCaR5lzub2Ly5bfO22Yrl.LQ0","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/a605e7c2-8a2c-4c4a-86fa-04867d404901.png"},"368c7c02-6850-476a-9d44-3cf43cf82932":{"name":"diamond_1","sourceUrl":null,"frameSize":{"x":40,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"9ooddWX6o3FRulojr54bFa6GMprqWMoF","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":37},"rootRelativePath":"assets/368c7c02-6850-476a-9d44-3cf43cf82932.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ladrao = createSprite(370,370,30,30);
ladrao.shapeColor = "mediumSeaGreen";

var diamante = createSprite(370, 30, 20, 20);
diamante.shapeColor = "deepSkyBlue";

var laser1 = createSprite (100, 100, 200, 5);
laser1.shapeColor = "red";
laser1.velocityY = 2;

var laser2 = createSprite (300, 300, 200, 5);
laser2.shapeColor = "red";
laser2.velocityY = -2;



function draw() 
{
  background ("lightSteelBlue");
  drawSprites();
  createEdgeSprites();
  ladrao.setAnimation("palhaco");
  diamante.setAnimation("diamond_1");

  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  ladrao.bounceOff(edges);


  if(keyDown("right"))
  {
  ladrao.velocityX = +2;
  }

  if(keyDown("left"))
  {
  ladrao.velocityX = -2;
  }

  if (keyDown("up"))
  {
  ladrao.velocityY = -2;
  }

  if (keyDown("down"))
  {
  ladrao.velocityY = 2;
  }

  if(laser1.isTouching(ladrao) || laser2.isTouching(ladrao))
  {
    stroke(0);
    fill(0);
    textSize(24);
    text("Ladrão capturado !", 120, 200);
    laser1.setVelocity (0,0);
    laser2.setVelocity(0,0);
    ladrao.setVelocity(0,0);
  }
  
   if(ladrao.isTouching(diamante))
  {
    stroke(0);
    fill(0);
    textSize(24);
    text("O diamante foi roubado !", 70, 200);
    laser1.setVelocity (0,0);
    laser2.setVelocity(0,0);
    ladrao.setVelocity(0,0);
  }  
  

  
  
  
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
