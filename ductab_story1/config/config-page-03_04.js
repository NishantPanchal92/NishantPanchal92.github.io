//  ------------------------------------------------------------------
//  
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/trees-left.jpg"
	},
	content: [
		{
			type: "Sprite",
			x: 20,
			y: 0,
			url: "images/zootopia/friend.png"
		},
		{
			type: "Sprite",
			x: 80,
			y: 50,
			url: "images/music-note-sign.png"
		},
		{
			type: "TextArea",
			align: "left",
			x: 10,
			y: 85,
			size: 32,
			color: "#000000",
			width: 80,
			text: "This is my friend <b><color=#f4114d>Nick</color></b>. He and I have partnered up to fight against crimes. We both like listening to music."
		}
	]
});

PBS.KIDS.storybook.config.pages.push({
	background: {
		url: "images/trees-right.jpg"
	},
	content: [
		{
			type: "Sprite",
			x: 30,
			y: 10,
			url: "images/zootopia/char2.png"
		},
		{
			type: "TextArea",
			align: "left",
			x: 10,
			y: 80,
			size: 32,
			color: "#000000",
			width: 80,
			text: "Hi, I am <b><color=#22aa22><size=1.2>Judy Hops</size></color></b>, a police officer in the beautiful city of <b>Zootopia</b>. Zootopia is an amazing city! Animals of all sizes and shapes live and work together happily."
		}
	]
});
