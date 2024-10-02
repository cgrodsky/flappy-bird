/**
 * Set up variables for score and pipes
 */
// Control bird to move upwards on button press
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bird.vy = -50
})
// Function to create a pipe pair
function createPipe () {
    pipeTop = sprites.create(img`
        .......bbbbbbbbbbbbbbbbbb.......
        ......bddddddddddddddddddb......
        .....bddddddddddddddddddddb.....
        ....bddddddddddddddddddddddb....
        ...bddddddddddddddddddddddddb...
        ..bddddddddddddddddddddddddddb..
        ..c11111111111111111111111111c..
        ..c11111111111111111111111111c..
        .bccccccccccccccccccccccccccccb.
        bb11111dd11dbbbbbbbbd11dd11111bb
        c11bbcc11dd11dbbbbd11dd11ccbb11c
        c1bbddbcb11dd111111dd11bcbddbb1c
        c1bbbddbdbd11dddddd11dbdbddbbb1c
        c11bbddcddbbd111111dbbddcddbb11c
        cb1111dcbd11bbbbbbbb11dbcd1111bc
        .cb111ccbdd1111111111ddbcc111bc.
        ..cccc.cbdbb1bb11bb1bbdbc.cccc..
        .......cbdbb1db11bd1bbdbc.......
        .......cbdbd1dd11dd1dbdbc.......
        .......cbdbd1dd11dd1dbdbc.......
        ......ccbdbd1dd11dd1dbdbcc......
        .....cbbbdbd1dd11dd1dbdbbbc.....
        .....cdbbdbd1dd11dd1dbdbbdc.....
        .....c11bbbd1dd11dd1dbbb11c.....
        .....cd111bbbbbbbbbbbb111dc.....
        ....cccd1111111111111111dccc....
        ...cbddbbb111111111111bbbddbc...
        ..cbddddddbbbbbbbbbbbbddddddbc..
        ..c11111111111111111111111111c..
        ..c11111111111111111111111111c..
        ..c11111111111111111111111111c..
        ..cbbbbbbbbbbbbbbbbbbbbbbbbbbc..
        `, SpriteKind.Enemy)
    pipeBottom = sprites.create(img`
        .......bbbbbbbbbbbbbbbbbb.......
        ......bddddddddddddddddddb......
        .....bddddddddddddddddddddb.....
        ....bddddddddddddddddddddddb....
        ...bddddddddddddddddddddddddb...
        ..bddddddddddddddddddddddddddb..
        ..c11111111111111111111111111c..
        ..c11111111111111111111111111c..
        .bccccccccccccccccccccccccccccb.
        bb11111dd11dbbbbbbbbd11dd11111bb
        c11bbcc11dd11dbbbbd11dd11ccbb11c
        c1bbddbcb11dd111111dd11bcbddbb1c
        c1bbbddbdbd11dddddd11dbdbddbbb1c
        c11bbddcddbbd111111dbbddcddbb11c
        cb1111dcbd11bbbbbbbb11dbcd1111bc
        .cb111ccbdd1111111111ddbcc111bc.
        ..cccc.cbdbb1bb11bb1bbdbc.cccc..
        .......cbdbb1db11bd1bbdbc.......
        .......cbdbd1dd11dd1dbdbc.......
        .......cbdbd1dd11dd1dbdbc.......
        ......ccbdbd1dd11dd1dbdbcc......
        .....cbbbdbd1dd11dd1dbdbbbc.....
        .....cdbbdbd1dd11dd1dbdbbdc.....
        .....c11bbbd1dd11dd1dbbb11c.....
        .....cd111bbbbbbbbbbbb111dc.....
        ....cccd1111111111111111dccc....
        ...cbddbbb111111111111bbbddbc...
        ..cbddddddbbbbbbbbbbbbddddddbc..
        ..c11111111111111111111111111c..
        ..c11111111111111111111111111c..
        ..c11111111111111111111111111c..
        ..cbbbbbbbbbbbbbbbbbbbbbbbbbbc..
        `, SpriteKind.Enemy)
    pipePosition = randint(0, 60)
    pipeTop.setPosition(160, pipePosition)
    pipeBottom.setPosition(160, pipePosition + pipeTop.height + gapSize)
    pipeTop.vx = -50
    pipeBottom.vx = -50
    // Destroy pipes after they move off screen
    pipeTop.lifespan = 4000
    pipeBottom.lifespan = 4000
}
// Collision detection
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
let pipePosition = 0
let pipeBottom: Sprite = null
let pipeTop: Sprite = null
let score = 0
let gapSize = 0
let bird: Sprite = null
// Initialize the game environment
bird = sprites.create(assets.image`myImage0`, SpriteKind.Player)
// Set gravity to bird sprite
bird.ay = 150
bird.vy = 0
gapSize = 60
// Display score on the screen
info.setScore(score)
// Increment score when bird passes pipes
game.onUpdateInterval(1500, function () {
    createPipe()
    info.changeScoreBy(1)
})
