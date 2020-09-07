jQuery(function($) {
            $("#rb1").click(function(){
                var v1=0;
                //alert($(".price1").text());
                v1=parseFloat($("#t1").val())*parseFloat($(".price1").text());
                v1=v1.toFixed(2);
                $(".p1").text(v1);
                calc();
        });
            $("#rb2").click(function(){
                var v2=0;
                //alert($(".price1").text());
                v2=parseFloat($("#t2").val())*parseFloat($(".price2").text());
                v2=v2.toFixed(2);
                $(".p2").text(v2);
                calc();
        });
            $("#rb3").click(function(){
                var v3=0;
                //alert($(".price1").text());
                v3=parseFloat($("#t3").val())*parseFloat($(".price3").text());
                v3=v3.toFixed(2);
                $(".p3").text(v3);
                calc();
        });
            $("#db1").click(function(){
                $(".basket-product1").hide();
                  $("#t1").val("0");
                $(".p1").text("0");
                calc();
        });$("#db2").click(function(){
                $(".basket-product2").hide();
                $("#t2").val("0");
                $(".p2").text("0");
                calc();
                
                
        });$("#db3").click(function(){
                $(".basket-product3").hide();
                $("#t3").val("0");
                $(".p3").text("0");
                calc();
                
        });
            });
        
        var calc = function(){
        var totalqut = 0,totalprice=0,ftotal=0;
            totalqut=parseFloat($("#t1").val())+parseFloat($("#t2").val())+parseFloat($("#t3").val());
        $(".total-items").text(totalqut);       totalprice=parseFloat($(".p1").text())+parseFloat($(".p2").text())+parseFloat($(".p3").text());        
        totalprice=totalprice.toFixed(2);
        $(".total-value").text(totalprice);           
        ftotal=parseFloat($("#tv").text())-parseFloat($(".discount").text());
        ftotal=ftotal.toFixed(2);
        $(".Ftotal").text(ftotal);
            
        }