new Vue({
    el : '#app',
    data:{
        items:[],
        item:null,
    },
    methods:{
        addItems:function ()
        {

            if(this.item.trim() == "")
            {
                alert('تسک را وارد کنید');
            }else
            {

                if(this.items.includes(this.item))
                {
                    alert('تکراری هست')
                }else
                {
                    this.items.push(this.item)
                }
                this.item = ""
            }

        },
        removeItem:function (index)
        {

            this.items.splice(index, 1)
        }
    },
})