scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.clouds)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.starField)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Jump.vy == 0) {
        Jump.vy += -150
    }
})
let Jump: Sprite = null
scene.setBackgroundColor(9)
Jump = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 2 7 a a 2 a 5 . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 1 f 3 3 1 f . . . . . 
    . . . . . 3 3 f f 3 3 . . . . . 
    . . . . . 3 f 2 2 f 3 . . . . . 
    . . . . . 3 3 f f 3 3 . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . f f . . . f . . . . . 
    . . . . f f . . . f f . . . . . 
    . . . f f . . . f f . . . . . . 
    . . . f . . . . f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Jump, 100, 0)
tiles.setTilemap(tilemap`level1`)
Jump.ay = 200
scene.cameraFollowSprite(Jump)
