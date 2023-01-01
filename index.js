// reference: https://animatedbackgrounds.me/

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const resize = () => {
	let box = canvas.getBoundingClientRect();
	canvas.width = box.width;
	canvas.height = box.height;
};

let light = {
	x: 10,
	y: 100,
};

let colors = ["#FBBB00", "#EA4335", "#03A9F1"];

function Box() {
	this.half_size = Math.floor(Math.random() * 75 + 1);
	this.x = Math.floor(Math.random() * canvas.width + 1);
	this.y = Math.floor(Math.random() * canvas.height + 1);
	this.r = Math.random() * Math.PI;
	this.shadow_length = 400;
	this.color = colors[Math.floor(Math.random() * colors.length)];

	this.getDots = function () {
		let full = (Math.PI * 2) / 4;

		let p1 = {
			x: this.x + this.half_size * Math.sin(this.r),
			y: this.y + this.half_size * Math.cos(this.r),
		};

		let p2 = {
			x: this.x + this.half_size * Math.sin(this.r + full),
			y: this.y + this.half_size * Math.cos(this.r + full),
		};

		let p3 = {
			x: this.x + this.half_size * Math.sin(this.r + full * 2),
			y: this.y + this.half_size * Math.cos(this.r + full * 2),
		};

		let p4 = {
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
		let speed = (60 - this.half_size) / 40;
		this.r += speed * 0.002;
		this.x += speed;
		this.y += speed;
	};

	this.draw = function () {
		let dots = this.getDots();
		context.beginPath();
		context.moveTo(dots.p1.x, dots.p1.y);
		context.lineTo(dots.p2.x, dots.p2.y);
		context.lineTo(dots.p3.x, dots.p3.y);
		context.lineTo(dots.p4.x, dots.p4.y);
		context.fillStyle = this.color;
		context.fill();

		this.y - this.half_size > canvas.height
			? (this.y -= canvas.height + 100)
			: this.x - this.half_size > canvas.width
			? (this.x -= canvas.width + 100)
			: null;
	};

	this.drawShadow = function () {
		let dots = this.getDots();
		let angles = [];
		let points = [];

		for (dot in dots) {
			let angle = Math.atan2(
				light.y - dots[dot].y,
				light.x - dots[dot].x
			);

			let endX =
				dots[dot].x +
				this.shadow_length * Math.sin(-angle - Math.PI / 2);

			let endY =
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

		for (let i = points.length - 1; i >= 0; i--) {
			let n = i == 3 ? 0 : i + 1;
			context.beginPath();
			context.moveTo(points[i].startX, points[i].startY);
			context.lineTo(points[n].startX, points[n].startY);
			context.lineTo(points[n].endX, points[n].endY);
			context.lineTo(points[i].endX, points[i].endY);
			context.fillStyle = "#2a2a2a";
			context.fill();
		}
	};
}

let boxes = [];

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < boxes.length; i++) {
		boxes[i].rotate();
		boxes[i].drawShadow();
	}
	for (let i = 0; i < boxes.length; i++) {
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
	for (let i = boxes.length - 1; i >= 0; i--) {
		if (i != b) {
			let dx =
				boxes[b].x +
				boxes[b].half_size -
				(boxes[i].x + boxes[i].half_size);
			let dy =
				boxes[b].y +
				boxes[b].half_size -
				(boxes[i].y + boxes[i].half_size);
			let d = Math.sqrt(dx * dx + dy * dy);
			if (d < boxes[b].half_size + boxes[i].half_size) {
				boxes[b].half_size =
					boxes[b].half_size > 1 ? (boxes[b].half_size -= 1) : 1;
				boxes[i].half_size =
					boxes[i].half_size > 1 ? (boxes[i].half_size -= 1) : 1;
			}
		}
	}
}
