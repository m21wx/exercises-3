
	let icons = document.querySelector('.header .icons');
	let body = document.body;
		icons.addEventListener('click',()=>{
			icons.classList.toggle('active')
			body.classList.toggle('drak')
		})
		
		
		
		
	let iconsSabBar= document.querySelector('.page .settingsBoxs .iconsSadbar');
		
		iconsSabBar.addEventListener('click',()=>{
			iconsSabBar.classList.toggle('active');
			document.querySelector('.page .settingsBoxs').classList.toggle('active')
		});
	
		
		
		
		
		let btn = document.querySelector('.page .settingsBoxs .form  button')
		let textInput = document.querySelector('.page .settingsBoxs .form  input')
		let mainBox = document.querySelector('.page .mainBox');
		
		btn.addEventListener('click',()=>{
			let value = textInput.value;
			if(value.length > 0){
			let divs = document.createElement('div');
			let p = document.createElement('p');
			let textDivs = document.createTextNode(value)
			divs.className ='box'
			p.appendChild(textDivs)
			divs.appendChild(p)
			mainBox.appendChild(divs);
			textInput.value = '';
	
			
			}else{
				alert('الحقل فاضي')
			}
		});

		
		
		
		window.onresize=()=>{
		 let width=document.body.clientWidth;
	
			if(width <= 767){
				document.querySelector('.page .settingsBoxs').classList.remove('active')
				
			}
		}
		
		
		
		
		
		
		