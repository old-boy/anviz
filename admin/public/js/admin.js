jQuery.Class('Admin',
{
    sidebarCollapse:function(){
        jQuery('.navbar').on('click','.sidebar-toggle',function(){
            jQuery('body').toggleClass('sidebar-collapse');
        })
    }
},{})