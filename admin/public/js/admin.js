jQuery.Class('Admin',
{
    sidebarCollapse:function(){
        jQuery('.navbar').on('click','.sidebar-toggle',function(){
            jQuery('body').toggleClass('sidebar-collapse');
        })
    },
    sidebarNavShow:function(){
        jQuery('.sidebar-menu').on('click','.treeview',function(){
            jQuery(this).children('ul').show('slow').parent().siblings().children('ul').hide('slow');
            jQuery(this).children('a .fa-angle-right').css({
                
            })
        })
    },
    clickICheck:function(){
        jQuery('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%'
        });
    },
    select2:function(){
        $('.select2').select2();
    },
    secondCateogoryName(){
        var cateogoryId = $(this).children().attr('data-id');
        const url = '../../config/url.js'.url;
        $.ajax({
            url:url + cateogoryId,
            dataType:'json',
            success:function(data){
                $('.cateogory-2-body strong').text(data.cateogoryName)
            }
        })
    }
},{});


