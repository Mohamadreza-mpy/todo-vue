new Vue({
    el : '#app',
    data:{
        items:[


        ],
        item:null,
    },
    methods:{
        addItems:function ()
        {

            if(this.item == null ||  this.item.trim() == "")
            {
                alert('تسک را وارد کنید');
            }else
            {


                    this.items.push(
                        {

                            'name':this.item,
                            'check': false,
                        }
                    )

                this.item = ""

            }

        },
        removeItem:function (index)
        {

            this.items.splice(index, 1)
        },
        checked:function (index)
        {

            if(this.items[index].check)
            {
                this.items[index].check = false
            }else
            {
                this.items[index].check = true
            }

        }
    },
})