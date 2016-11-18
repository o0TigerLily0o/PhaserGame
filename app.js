console.log("hahaha");

// Declaring variables at the top
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', 
	{preload: preload, create: create, update: update}
	);

var score = 0;

function preload() {
	// load some assets
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png')
}

function create() {
	// define the physics
	game.physics.startSystem(Phaser.Physics.ARCADE);
	// add the sky
	game.add.sprite(0, 0, 'sky');

	// Make group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	// Ground
	var ground = platforms.create(0, game.world.height - 64, 'ground'); //line 13 image 'ground'
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	// Ledges
	var ledge = platforms.create(400, 400, 'ground'); 
	ground.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ground.body.immovable = true;
}

function update() {

}