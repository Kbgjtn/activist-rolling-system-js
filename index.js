var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function resize() {
	var box = canvas.getBoundingClientRect();
	canvas.width = box.width;
	canvas.height = box.height;
}

var light = {
	x: 10,
	y: 100,
};

var colors = ["#FBBB00", "#EA4335", "#03A9F1"];

function Box() {
	this.half_size = Math.floor(Math.random() * 75 + 1);
	this.x = Math.floor(Math.random() * canvas.width + 1);
	this.y = Math.floor(Math.random() * canvas.height + 1);
	this.r = Math.random() * Math.PI;
	this.shadow_length = 400;
	this.color = colors[Math.floor(Math.random() * colors.length)];

	this.getDots = function () {
		var full = (Math.PI * 2) / 4;

		var p1 = {
			x: this.x + this.half_size * Math.sin(this.r),
			y: this.y + this.half_size * Math.cos(this.r),
		};
		var p2 = {
			x: this.x + this.half_size * Math.sin(this.r + full),
			y: this.y + this.half_size * Math.cos(this.r + full),
		};
		var p3 = {
			x: this.x + this.half_size * Math.sin(this.r + full * 2),
			y: this.y + this.half_size * Math.cos(this.r + full * 2),
		};
		var p4 = {
			x: this.x + this.half_size * Math.sin(this.r + full * 3),
			y: this.y + this.half_size * Math.cos(this.r + full * 3),
		};

		return {
			p1: p1,
			p2: p2,
			p3: p3,
			p4: p4,
		};
	};
	this.rotate = function () {
		var speed = (60 - this.half_size) / 40;
		this.r += speed * 0.002;
		this.x += speed;
		this.y += speed;
	};
	this.draw = function () {
		var dots = this.getDots();
		ctx.beginPath();
		ctx.moveTo(dots.p1.x, dots.p1.y);
		ctx.lineTo(dots.p2.x, dots.p2.y);
		ctx.lineTo(dots.p3.x, dots.p3.y);
		ctx.lineTo(dots.p4.x, dots.p4.y);
		ctx.fillStyle = this.color;
		ctx.fill();

		if (this.y - this.half_size > canvas.height) {
			this.y -= canvas.height + 100;
		}
		if (this.x - this.half_size > canvas.width) {
			this.x -= canvas.width + 100;
		}
	};

	this.drawShadow = function () {
		var dots = this.getDots();
		var angles = [];
		var points = [];

		for (dot in dots) {
			var angle = Math.atan2(
				light.y - dots[dot].y,
				light.x - dots[dot].x
			);
			var endX =
				dots[dot].x +
				this.shadow_length * Math.sin(-angle - Math.PI / 2);
			var endY =
				dots[dot].y +
				this.shadow_length * Math.cos(-angle - Math.PI / 2);
			angles.push(angle);
			points.push({
				endX: endX,
				endY: endY,
				startX: dots[dot].x,
				startY: dots[dot].y,
			});
		}

		for (var i = points.length - 1; i >= 0; i--) {
			var n = i == 3 ? 0 : i + 1;
			ctx.beginPath();
			ctx.moveTo(points[i].startX, points[i].startY);
			ctx.lineTo(points[n].startX, points[n].startY);
			ctx.lineTo(points[n].endX, points[n].endY);
			ctx.lineTo(points[i].endX, points[i].endY);
			ctx.fillStyle = "#2a2a2a";
			ctx.fill();
		}
	};
}

var boxes = [];

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < boxes.length; i++) {
		boxes[i].rotate();
		boxes[i].drawShadow();
	}
	for (var i = 0; i < boxes.length; i++) {
		collisionDetection(i);
		boxes[i].draw();
	}
	requestAnimationFrame(draw);
}

resize();
draw();

while (boxes.length < 150) {
	boxes.push(new Box());
}

window.onresize = resize;
canvas.onmousemove = function (e) {
	light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
	light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
};

function collisionDetection(b) {
	for (var i = boxes.length - 1; i >= 0; i--) {
		if (i != b) {
			var dx =
				boxes[b].x +
				boxes[b].half_size -
				(boxes[i].x + boxes[i].half_size);
			var dy =
				boxes[b].y +
				boxes[b].half_size -
				(boxes[i].y + boxes[i].half_size);
			var d = Math.sqrt(dx * dx + dy * dy);
			if (d < boxes[b].half_size + boxes[i].half_size) {
				boxes[b].half_size =
					boxes[b].half_size > 1 ? (boxes[b].half_size -= 1) : 1;
				boxes[i].half_size =
					boxes[i].half_size > 1 ? (boxes[i].half_size -= 1) : 1;
			}
		}
	}
}
