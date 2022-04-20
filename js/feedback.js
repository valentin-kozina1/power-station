/*функционал кнопок (обратная связь и меню страницы)*/
var	modals_btn = document.getElementsByClassName('modals_btn');
var feedback = document.querySelector('.feedback-container');
var feedback_exit = document.getElementById('feedback_exit');

var mark = document.getElementsByClassName('green-content-leftright-item-mark');
var mark_block = document.getElementsByClassName('green-content-block');
var sale_mark = document.getElementById('sale-mark');
var fixed_mark = document.getElementById('fixed-mark');
var limit_mark = document.getElementById('limit-mark');

var left = document.getElementsByClassName('arrow-left');
var right = document.getElementsByClassName('arrow-right');
var left_A = document.getElementById('customers-arrow-left');
var right_A = document.getElementById('customers-arrow-right');
var customers_foto = document.getElementsByClassName('customers-foto')[0];

const toggleMenu = function(a) 
{ 
    a.classList.toggle('nonactive');
    document.body.classList.toggle('body-scroll-disable');
}

const toggleArrow = function(block_now, block_next, className_first, className_second) 
{ 
    block_now.classList.remove(className_first);
	block_now.classList.add(className_second)
	block_next.classList.remove(className_second)
	block_next.classList.add(className_first);
}

const foto = function() {return window.getComputedStyle(customers_foto).backgroundImage};

const backgroundImage_text = function(a) 
{
	var index = foto().charAt(foto().length-7);
	if (a == 1) index++; else index--;
	if (index<1) index = 3;
	if (index>3) index = 1;
	return foto().slice(0, foto().length-7) + index + foto().slice(foto().length-6, foto().length); 
}


/*функционал кнопки обратной связи и модального окна*/
for (var i = 0; i < modals_btn.length; i++) 
{
	modals_btn[i].addEventListener('click', function(e) 
	{
    	e.stopPropagation();
    	toggleMenu(feedback);
    	elem = document.documentElement.getBoundingClientRect();
    	var top = Math.abs(elem.y) +
			(document.documentElement.clientHeight - 
				feedback.clientHeight) /2;
    	if (document.documentElement.clientWidth < 640) 
    	{
    		var left = 0;
    	}    		
    	else 
    	{
    		var left = (document.documentElement.clientWidth - 
				feedback.clientWidth) /2;	
    	}
		feedback.style = "top:" + top + "px; left:" + left + "px;";
	});

	document.addEventListener('click', function(e) 
	{
   		const target = e.target; 
   		const its_feedback = target == feedback || feedback.contains(target);
    	const its_modals_btn = target == modals_btn[i];
    	const its_feedback_exit = target == feedback_exit;
    	const feedback_is_nonactive = feedback.classList.contains('nonactive');
    	const its_feedback_sub = target.classList.contains('submit') 

        if ((!its_feedback && !its_modals_btn && !its_feedback_sub|| its_feedback_exit) && !feedback_is_nonactive) 
    	{
        	toggleMenu(feedback);
    	}
	});
}

/*функционал закладок в блоке Зеленый тариф*/
for (var i = 0; i < mark.length; i++)
{
	mark[i].addEventListener('click', function(e)
	{ 
		for (var i = 0; i < mark.length; i++) 
		{ 
			mark[i].classList.remove('green-content-leftright-item-mark-active')
		}
		this.classList.add('green-content-leftright-item-mark-active');
		
		var id = this.id;
		var id_new = id.slice(0, id.indexOf('-'))+"-block";
		for (var i = 0; i < mark_block.length; i++) 
		{
			if (mark_block[i].id != id_new) {
				mark_block[i].classList.add('nonactive')
			}
			else mark_block[i].classList.remove('nonactive')
		}
	})	
}

/*функционал стрелок в блоке Зеленый тариф*/
for (var i = 0; i < left.length; i++)
{
	left[i].addEventListener('click', function(e)
	{ 
		if (this.parentNode.parentNode.previousElementSibling.classList == "nonactive") 
		{
			toggleArrow(this.parentNode.parentNode, this.parentNode.parentNode.previousElementSibling, "green-content-left-item-text", "nonactive")
		}
	})
	right[i].addEventListener('click', function(e)
	{
		if (this.parentNode.parentNode.nextElementSibling) 
		{
			toggleArrow(this.parentNode.parentNode, this.parentNode.parentNode.nextElementSibling, "green-content-left-item-text", "nonactive")
		}		
	})	
}

/*функционал стрелок в блоке Наши клиенты*/
left_A.addEventListener('click', function(e)
{ 
	customers_foto.style.backgroundImage = backgroundImage_text(-1);

	var customers_text = document.getElementsByClassName('customers-text')[0];
	if (customers_text.previousElementSibling && customers_text.previousElementSibling.classList == 'nonactive') 
	{
		toggleArrow(customers_text, customers_text.previousElementSibling, "customers-text", "nonactive")
	}
	else
	{
		toggleArrow(customers_text, customers_text.nextElementSibling.nextElementSibling, "customers-text", "nonactive")
	}
})

right_A.addEventListener('click', function(e)
{ 
	customers_foto.style.backgroundImage = backgroundImage_text(1);

	var customers_text = document.getElementsByClassName('customers-text')[0];
	if (customers_text.nextElementSibling && customers_text.nextElementSibling.classList == 'nonactive') 
	{
		toggleArrow(customers_text, customers_text.nextElementSibling, "customers-text", "nonactive")
	}
	else
	{
		toggleArrow(customers_text, customers_text.previousElementSibling.previousElementSibling, "customers-text", "nonactive")
	}
})