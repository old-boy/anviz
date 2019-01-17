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
    }
},{})