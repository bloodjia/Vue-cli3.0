import $ from 'jquery'
import Vue from 'vue'

var data={
	heros:[
	{name:"勇者",sate:45},
	{name:"芙蓉",sate:415},
	{name:"单皇子",sate:352},
	{name:"臭弟弟",sate:765}],
	addhero:{name:"",sate:""},
	updatehero:{name:"",sate:""},

};

function tabletest(){	
	$("#updatePage").hide();
	
	var vue =new Vue({
		el: '#div1',
		data:data,
		methods:{
			add:function(){
				this.heros.push(this.addhero);
				this.hero4Add = { id: 0, name: '', hp: '0'}
			},
			delect:function(name){
				for(var i=0;i<=this.heros.length;i++){
					if(this.heros[i].name==name){
						this.heros.splice(i,1);
						break;
					}
				}
			},
			toupdate:function(hero){
				$("#numbeltable").hide();
				$("#updatePage").show();
				this.updatehero=hero;
			},
			update:function(){
				$("#updatePage").hide();
				$("#numbeltable").show();
			},
			cencel:function(){
				$("#updatePage").hide();
				$("#numbeltable").show();
			},
			
		}
	
	})	
}

	export default{
	tabletest
	}
