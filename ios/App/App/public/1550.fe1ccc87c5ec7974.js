"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1550],{1550:(P,m,a)=>{a.r(m),a.d(m,{MotdepasseoublierPageModule:()=>w});var p=a(6895),u=a(433),r=a(2723),g=a(1407),c=a(655),e=a(8256),f=a(529);let M=(()=>{class o{constructor(t){this.http=t}verierEmail(t){return this.http.post(`http://localhost:8080/api/auth/resetPassword/${t}`,t)}nouveauMDP(t){return this.http.post("http://localhost:8080/api/auth/changePassword/",t)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function h(o,s){1&o&&(e.TgZ(0,"div",29),e._uU(1," Veuillez remplir le champs ! "),e.qZA())}function b(o,s){if(1&o&&(e.TgZ(0,"div")(1,"p",30),e._uU(2),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.resultat.message)}}function _(o,s){1&o&&(e.TgZ(0,"div",29),e._uU(1," Veuillez remplir le champs ! "),e.qZA())}const v=[{path:"",component:(()=>{class o{constructor(t,n,d){this.motDEpasse=t,this.router=n,this.loadinctrl=d,this.form={email:null},this.form2={emailOrNumero:null,confirmpassword:null,newpassword:null,currentpassword:null},this.isVisible=!0}ngOnInit(){}showLoading(){return(0,c.mG)(this,void 0,void 0,function*(){(yield this.loadinctrl.create({message:"En cours...",duration:3e3,spinner:"circles"})).present()})}onSubmit(){this.showLoading(),this.motDEpasse.verierEmail(this.form.email).subscribe(t=>{this.resultat=t,this.isVisible=1!=this.resultat.status})}onReset(){this.form2.emailOrNumero=this.form.emailOrNumero,this.form2.confirmpassword=this.form.confirmpassword,this.form2.newpassword=this.form.newpassword,this.form2.currentpassword=this.form.currentpassword,this.motDEpasse.nouveauMDP(this.form2).subscribe(t=>{this.resultat=t,1==this.resultat.status&&setTimeout(()=>{this.router.navigateByUrl("connexion")},3e3)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M),e.Y36(g.F0),e.Y36(r.HT))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-motdepasseoublier"]],decls:53,vars:10,consts:[["slot","start","defaultHref","connexion"],[1,"title"],[2,"margin-top","5%"],[1,"SaisirEmail",3,"hidden"],[1,"imgT","ion-text-center"],["src","../../../assets/img/log.png","alt","","srcset","","width","40%"],[2,"margin-top","10%","margin-bottom","10%"],["name","contact-form","novalidate","",2,"margin","10px auto",3,"ngSubmit"],["f","ngForm"],["counter","true"],["position","floating"],["type","email","name","email","required","",3,"ngModel","ngModelChange"],["usernameOrEmail","ngModel"],["class","ion-text-center alert alert-danger col-md-6","role","alert","style","color: red; margin: 5px;",4,"ngIf"],["align","center",1,"bouttonEnyoyer",2,"margin-top","15%"],[1,"reinitialiser",3,"hidden"],["src","../../../assets/img/log.png","alt","","srcset","","width","15%"],[4,"ngIf"],["name","contact-form1","novalidate","",2,"margin","10px auto",3,"ngSubmit"],["G","ngForm"],["type","text","name","emailOrNumero","required","",3,"ngModel","ngModelChange"],["emailOrNumero","ngModel"],["type","text","name","currentpassword","maxlength","10","placeholder","XXXXXXXXXX","required","",3,"ngModel","ngModelChange"],["currentpassword","ngModel"],["type","password","name","newpassword","required","",3,"ngModel","ngModelChange"],["newpassword","ngModel"],["type","password","name","confirmpassword","required","",3,"ngModel","ngModelChange"],["confirmpassword","ngModel"],["align","center",1,"bouttonEnyoyer",2,"margin-top","10%"],["role","alert",1,"ion-text-center","alert","alert-danger","col-md-6",2,"color","red","margin","5px"],[2,"margin-top","5%","margin-bottom","10%","font-size","15px","padding","10px","text-align","center","color","#04CF72"]],template:function(t,n){if(1&t){const d=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar"),e._UZ(2,"ion-back-button",0),e.TgZ(3,"ion-title",1),e._uU(4,"My Farmed"),e.qZA()()(),e.TgZ(5,"ion-content")(6,"div",2)(7,"div",3)(8,"div",4),e._UZ(9,"img",5),e.qZA(),e.TgZ(10,"title",6),e._uU(11,"Veuillez saisir votre email"),e.qZA(),e.TgZ(12,"form",7,8),e.NdJ("ngSubmit",function(){e.CHM(d);const i=e.MAs(13);return e.KtG(i.form.valid&&n.onSubmit())}),e.TgZ(14,"ion-item",9)(15,"ion-label",10),e._uU(16,"Email"),e.qZA(),e.TgZ(17,"ion-input",11,12),e.NdJ("ngModelChange",function(i){return n.form.email=i}),e.qZA()(),e.YNc(19,h,2,0,"div",13),e.TgZ(20,"div",14)(21,"button"),e._uU(22,"Envoyer"),e.qZA()()()(),e.TgZ(23,"div",15)(24,"div",4),e._UZ(25,"img",16),e.qZA(),e.YNc(26,b,3,1,"div",17),e.TgZ(27,"form",18,19),e.NdJ("ngSubmit",function(){e.CHM(d);const i=e.MAs(28);return e.KtG(i.form.valid&&n.onReset())}),e.TgZ(29,"ion-item")(30,"ion-label",10),e._uU(31,"T\xe9l\xe9phone ou Email"),e.qZA(),e.TgZ(32,"ion-input",20,21),e.NdJ("ngModelChange",function(i){return n.form.emailOrNumero=i}),e.qZA()(),e.TgZ(34,"ion-item")(35,"ion-label",10),e._uU(36,"Code de reinitialisation"),e.qZA(),e.TgZ(37,"ion-input",22,23),e.NdJ("ngModelChange",function(i){return n.form.currentpassword=i}),e.qZA()(),e.TgZ(39,"ion-item")(40,"ion-label",10),e._uU(41,"Nouveau mot de passe"),e.qZA(),e.TgZ(42,"ion-input",24,25),e.NdJ("ngModelChange",function(i){return n.form.newpassword=i}),e.qZA()(),e.TgZ(44,"ion-item")(45,"ion-label",10),e._uU(46,"Confirmer"),e.qZA(),e.TgZ(47,"ion-input",26,27),e.NdJ("ngModelChange",function(i){return n.form.confirmpassword=i}),e.qZA()(),e.YNc(49,_,2,0,"div",13),e.TgZ(50,"div",28)(51,"button"),e._uU(52,"Envoyer"),e.qZA()()()()()()}if(2&t){const d=e.MAs(13),l=e.MAs(18);e.xp6(7),e.Q6J("hidden",!n.isVisible),e.xp6(10),e.Q6J("ngModel",n.form.email),e.xp6(2),e.Q6J("ngIf",l.errors&&d.submitted),e.xp6(4),e.Q6J("hidden",n.isVisible),e.xp6(3),e.Q6J("ngIf",n.resultat),e.xp6(6),e.Q6J("ngModel",n.form.emailOrNumero),e.xp6(5),e.Q6J("ngModel",n.form.currentpassword),e.xp6(5),e.Q6J("ngModel",n.form.newpassword),e.xp6(5),e.Q6J("ngModel",n.form.confirmpassword),e.xp6(2),e.Q6J("ngIf",l.errors&&d.submitted)}},dependencies:[p.O5,u._Y,u.JJ,u.JL,u.Q7,u.nD,u.On,u.F,r.oU,r.W2,r.Gu,r.pK,r.Ie,r.Q$,r.wd,r.sr,r.j9,r.cs],styles:[".bouttonEnyoyer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#04CF72;padding:5%;font-size:20px;color:#fff;border-radius:5px}.reinitialiser[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin:10px}ion-toolbar[_ngcontent-%COMP%]{--background:#04CF72;text-align:center;color:#fff}.title[_ngcontent-%COMP%]{margin:10%;font-weight:700;font-size:25px}ion-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{--color: white}"]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(v),g.Bz]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,u.u5,r.Pc,Z]}),o})()}}]);