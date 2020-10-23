console.info('controls.js');
bakery.theme.colors = {
    list: [],
    add: function(color){
        const self = this;
        for(let i = 0; i < self.list.length; i++){
            if(self.list[i].name === color.name){
                alert('color names should be unique!!!!');
                return;
            }
        }
        self.list.push(color);
    },
    remove: function(){

    },
    clearColorsList: function(){
        colorsSavedList.innerHTML = '';
    },
    display: function(){
        const self = this;
        self.clearColorsList();
        for(let i = 0; i < self.list.length; i++){
            const currentColor = self.list[i];
            const li = document.createElement('li');
            const spanName = document.createElement('span');
            const spanValue = document.createElement('span');
            const div = document.createElement('div');
            const remove = document.createElement('button');


            li.classList.add('color-saved')
            spanName.classList.add('color-name')
            spanValue.classList.add('color-value')
            div.classList.add('color-sample')
            remove.classList.add('remove-color');
            remove.dataset.colorReference = (`${currentColor.name}`);

            spanName.innerText = `${currentColor.name}`;
            spanValue.innerText = `${currentColor.value}`;
            div.style.backgroundColor = `${currentColor.value}`;
            remove.innerText = 'delete';
            div.style.width = '30px';
            div.style.height = '30px';
            li.appendChild(spanName);
            li.appendChild(spanValue);
            li.appendChild(div);
            li.appendChild(remove)
            colorsSavedList.appendChild(li);
        }
        
        
    }
};

const colorName = document.getElementById('color-name');
const colorSave = document.getElementById('color-picker-save');
const colorsSavedList = document.getElementById('colors-saved-list');
const colorPicker = document.getElementById('color-picker');
const Color = function(name, value){
    this.name = name;
    this.value = value;

    return{name, value}
}

colorSave.addEventListener('click', function(e){
    e.preventDefault();
    const color = new Color(colorName.value, colorPicker.value)
    bakery.theme.colors.add(color);
    console.log(bakery.theme.colors)
    bakery.theme.colors.display();
});

document.addEventListener('click', function(e){
    if(e.target && e.target.className == 'remove-color'){
          //do something
          let colorReference = e.target.dataset.colorReference;
          let addedColorsList = bakery.theme.colors.list;

          let newColorsList = [];
          for(let i = 0; i < addedColorsList.length; i++){
            let color = addedColorsList[i];
            if(color.name !== colorReference){
                newColorsList.push(color);
            }
          }
         

          bakery.theme.colors.list = newColorsList;
          bakery.theme.colors.display();
     }
 });