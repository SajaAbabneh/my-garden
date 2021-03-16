'use strict';

const form = document.getElementById( 'form' );
const table=document.getElementById( 'table' );
const headerName=['#','Image','Name','Season'];

let allFlower=[];

function Flower( namee,category,season ){
  this.namee=namee;
  this.category=`./img/${category}.jpeg`;
  this.season=season;
  allFlower.push( this );
}


function handle( event ){
  event.preventDefault();

  const nameFlower=event.target.nameflower.value;
  //   console.log('s',nameFlower);
  const imageOfflower=event.target.imgflower.value;
  const season=event.target.seasonflower.value;

  let newItem=new Flower( nameFlower,imageOfflower,season );
  localStorage.setItem( 'key',JSON.stringify( allFlower ) );
  newItem.render();

}

function headerTitle(){
  let tr1Element=document.createElement( 'tr' );
  table.appendChild( tr1Element );
  let td1Element=document.createElement( 'td' );
  tr1Element.appendChild( td1Element );
  for( let i=0;i<headerName.length;i++ ){
    let th1Element=document.createElement( 'th' );
    td1Element.appendChild( th1Element );
    th1Element.textContent=headerName[i];

  }
}
headerTitle();

Flower.prototype.render=function(){
  let tr2Element=document.createElement( 'tr' );
  table.appendChild( tr2Element );

  let btn=document.createElement( 'button' );
  tr2Element.appendChild( btn );
  btn.textContent='x';

  let imgElement=document.createElement( 'img' );
  tr2Element.appendChild( imgElement );
  imgElement.setAttribute( 'src',this.category );
  imgElement.setAttribute( 'style', 'width: 90px; height: 90px;' );


  let td2Element=document.createElement( 'td' );
  tr2Element.appendChild( td2Element );
  console.log( this.namee );
  td2Element.textContent=this.namee;

  let td3Element=document.createElement( 'td' );
  tr2Element.appendChild( td3Element );
  td3Element.textContent=this.season;

};

function renderagain(){
  let tr2Element=document.createElement( 'tr' );
  table.appendChild( tr2Element );

  for( let i=0;i<allFlower.length;i++ ){
    let btn=document.createElement( 'button' );
    tr2Element.appendChild( btn );
    btn.textContent='x';

    let imgElement=document.createElement( 'img' );
    tr2Element.appendChild( imgElement );
    imgElement.setAttribute( 'src',allFlower[i].category );
    imgElement.setAttribute( 'style', 'width: 90px; height: 90px;' );


    let td2Element=document.createElement( 'td' );
    tr2Element.appendChild( td2Element );
    td2Element.textContent=allFlower[i].namee;

    let td3Element=document.createElement( 'td' );
    tr2Element.appendChild( td3Element );
    td3Element.textContent=allFlower[i].season;
  }

}

function checkLS(){
  if( localStorage.getItem( 'key' ) ){
    allFlower=JSON.parse( localStorage.getItem( 'key' ) );
    renderagain();
  }
}

form.addEventListener( 'submit', handle );
checkLS();
