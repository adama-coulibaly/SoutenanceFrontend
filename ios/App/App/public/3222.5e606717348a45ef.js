"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3222],{3222:(x,d,o)=>{o.r(d),o.d(d,{ForumPageModule:()=>T});var c=o(6895),r=o(433),i=o(2723),a=o(1407),p=o(655),t=o(8256),l=o(8392),h=o(7184),f=o(3189);const M=function(n){return["/bottom-bar/forum/detail-forum",n]};function P(n,s){if(1&n&&(t.TgZ(0,"div",9)(1,"div",10)(2,"div",11)(3,"ion-avatar"),t._UZ(4,"img",12),t.qZA()(),t.TgZ(5,"div",13)(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"span"),t._uU(9,"Par: "),t.TgZ(10,"strong"),t._uU(11),t.qZA(),t._uU(12),t.ALo(13,"date"),t.qZA()()(),t.TgZ(14,"div",14)(15,"div",15)(16,"div")(17,"ion-fab-button",16),t._uU(18),t.qZA()(),t.TgZ(19,"div")(20,"span"),t._uU(21," Commentaire(s)"),t.qZA()()(),t.TgZ(22,"div",17)(23,"a",18),t._uU(24,"Voir plus"),t.qZA()()()()),2&n){const e=s.$implicit;t.xp6(4),t.s9C("src",e.user.avatar,t.LSH),t.xp6(3),t.Oqu(e.titretheme.slice(0,70)),t.xp6(4),t.AsE("",e.user.nom," ",e.user.prenom,""),t.xp6(1),t.hij(" le ",t.xi3(13,7,e.dateposte,"dd/MM/yy, \xe0 HH:mm"),""),t.xp6(6),t.hij(" ",e.nbreCommentaire," "),t.xp6(5),t.Q6J("routerLink",t.VKq(10,M,e.idtheme))}}function C(n,s){if(1&n&&(t.TgZ(0,"div",26),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.erreur)}}function _(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",19)(1,"h2"),t._uU(2,"Poser votre question ici "),t.qZA(),t.YNc(3,C,2,1,"div",20),t.TgZ(4,"form",21),t.NdJ("ngSubmit",function(){t.CHM(e);const g=t.oxw();return t.KtG(g.ajouter())}),t.TgZ(5,"ion-item",22)(6,"ion-label",23),t._uU(7,"Question ou Th\xe8me"),t.qZA(),t.TgZ(8,"ion-input",24),t.NdJ("ngModelChange",function(g){t.CHM(e);const u=t.oxw();return t.KtG(u.theme.titretheme=g)}),t.qZA()(),t.TgZ(9,"div",25)(10,"button"),t._uU(11,"Poster la question"),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",0==e.tailleMinimum),t.xp6(5),t.Q6J("ngModel",e.theme.titretheme)}}const v=[{path:"",component:(()=>{class n{constructor(e,m,g,u){this.alertController=e,this.location=m,this.ThemesService=g,this.tokenStorage=u,this.Adama=["adms","mous","ali","jeans","bore"],this.theme={idtheme:"",titretheme:"",dateposte:"",user_id:""}}customCounterFormatter(e,m){return m-e+" nombre de caract\xe8res requis"}myBackButton(){this.location.back()}ngOnInit(){this.user=this.tokenStorage.getUser(),this.ThemesService.toutLesThemes().subscribe(e=>{this.lesThemes=e})}ajouter(){null==this.user.id?this.presentAlert():this.theme.titretheme.length<25?(this.erreur="Taille minimum 25 caract\xe8res !",this.tailleMinimum=!1):(this.tailleMinimum=!0,this.ThemesService.posterTheme(this.theme,this.user.id).subscribe(e=>{this.poster=e}),window.location.reload())}presentAlert(){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Connexion requise !",message:"Veuillez vous connect\xe9 pour pouvoir poster un th\xe8me !",buttons:["OK"]})).present()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.Br),t.Y36(c.Ye),t.Y36(l.q),t.Y36(h.i))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-forum"]],decls:13,vars:5,consts:[[1,"section1",2,"margin-top","15%"],["vertical","top","horizontal","end","slot","fixed","id","open-custom-dialog","expand","block"],["name","add"],[2,"width","75%","margin-top","2%"],["slot","end","animated","true","placeholder","Recherche",3,"ngModel","ngModelChange"],[1,"sectionTheme"],["class","contenu",4,"ngFor","ngForOf"],["id","example-modal","trigger","open-custom-dialog"],["modal",""],[1,"contenu"],[1,"imgEtTheme"],[1,"images"],["alt","","srcset","",3,"src"],[1,"titre"],[1,"commentaireEtVoirplus"],[1,"commentaires"],[2,"width","25px !important","height","25px !important"],[1,"voirplus"],[3,"routerLink"],[1,"forms"],["style","color: red; font-size: 15px; text-align: center;",4,"ngIf"],["name","contact-form",3,"ngSubmit"],["counter","true"],["position","floating"],["type","text","maxlength","150","minlength","25","name","titretheme",3,"ngModel","ngModelChange"],["align","center"],[2,"color","red","font-size","15px","text-align","center"]],template:function(e,m){1&e&&(t.TgZ(0,"ion-content")(1,"div",0)(2,"ion-fab",1)(3,"ion-fab-button"),t._UZ(4,"ion-icon",2),t.qZA()(),t.TgZ(5,"div",3)(6,"ion-searchbar",4),t.NdJ("ngModelChange",function(u){return m.filterTerm=u}),t.qZA()()(),t.TgZ(7,"div",5),t.YNc(8,P,25,12,"div",6),t.ALo(9,"filter"),t.qZA(),t.TgZ(10,"ion-modal",7,8),t.YNc(12,_,12,2,"ng-template"),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("ngModel",m.filterTerm),t.xp6(2),t.Q6J("ngForOf",t.xi3(9,2,m.lesThemes,m.filterTerm)))},dependencies:[c.sg,c.O5,r._Y,r.JJ,r.JL,r.wO,r.nD,r.On,r.F,i.BJ,i.W2,i.IJ,i.W4,i.gu,i.pK,i.Ie,i.Q$,i.VI,i.ki,i.j9,i.Fo,a.rH,c.uU,f.Z],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#04CF72}ion-title[_ngcontent-%COMP%]{color:#fff}.retourB[_ngcontent-%COMP%]{display:flex}.lefts[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:30px;cursor:pointer!important;padding:0;margin-right:15px}.lefts[_ngcontent-%COMP%]   .cart[_ngcontent-%COMP%]{position:absolute;right:67px;top:2px;background-color:red;color:#fff;height:15px;border-radius:100%}.lefts[_ngcontent-%COMP%]   .notif[_ngcontent-%COMP%]{position:absolute;right:16px;background-color:red;color:#fff;height:15px;border-radius:100%}.lefts[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{font-size:10px}.section1[_ngcontent-%COMP%]{box-shadow:0 4px 4px rgba(0,0,0,.25);position:fixed;background-color:#f8f6fb}.ios[_ngcontent-%COMP%]   .section1[_ngcontent-%COMP%]{margin-top:5%;box-shadow:0 4px 4px rgba(0,0,0,.25);position:fixed;background-color:#f8f6fb;width:100%}ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{padding:7px}.sectionTheme[_ngcontent-%COMP%]{margin-top:40%!important}.contenu[_ngcontent-%COMP%]{width:95%;margin:5% auto;background:#F8F6FB;border:1px solid #04CF72;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:5px;padding:2%}.imgEtTheme[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 5fr;gap:10px}.imgEtTheme[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:50px;height:50px}.imgEtTheme[_ngcontent-%COMP%]   .titre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700;font-size:13px;overflow-wrap:break-word}.imgEtTheme[_ngcontent-%COMP%]   .titre[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.commentaireEtVoirplus[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;font-size:12px;margin:2%;align-items:center}.commentaireEtVoirplus[_ngcontent-%COMP%]   .voirplus[_ngcontent-%COMP%]{margin-top:10px;font-weight:900}.commentaireEtVoirplus[_ngcontent-%COMP%]   .voirplus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.commentaires[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:5%}ion-modal#example-modal[_ngcontent-%COMP%]{--width: fit-content;--min-width: 250px;--height: fit-content;--border-radius: 6px;--box-shadow: 0 28px 48px rgba(0, 0, 0, .4)}ion-modal#example-modal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:20px 20px 10px}ion-modal#example-modal[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:6px;width:48px;height:48px;padding:4px 0;color:#aaa}ion-modal#example-modal[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin-bottom:10px}.forms[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:15px;margin:10px;color:#04cf72;font-weight:700}.forms[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px;border-radius:5px;background-color:#04cf72;color:#fff;margin:10px auto!important}"]}),n})()},{path:"detail-forum/:id_theme",loadChildren:()=>o.e(275).then(o.bind(o,275)).then(n=>n.DetailForumPageModule)}];let O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.Bz.forChild(v),a.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,r.u5,i.Pc,O,f.h]}),n})()},8392:(x,d,o)=>{o.d(d,{q:()=>i});var c=o(8256),r=o(529);let i=(()=>{class a{constructor(t){this.http=t}toutLesThemes(){return this.http.get("http://localhost:8080/theme/liste")}posterTheme(t,l){return this.http.post(`http://localhost:8080/theme/ajouter/${l}`,t)}commenterTheme(t,l,h){return this.http.post(`http://localhost:8080/commentaire/ajouter/${l}/${h}`,t)}}return a.\u0275fac=function(t){return new(t||a)(c.LFG(r.eN))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);