window.onload = function(){
}
current_viz = ""

goToHome = (e) => {
    window.location = './'
}

clear_current_viz = () => {
    document.getElementById("vizName").innerHTML = ""
    document.getElementsByClassName("timeline")[0].style.display = 'none'
    if(current_viz !== ""){
        //var div = document.getElementById("tablueaVizes")
        var body = document.getElementsByClassName("timeline")[0].parentNode
        document.body.removeChild(document.getElementById(current_viz));
        //body.removeChild(body.lastChild);
        //div.style.display = 'none';
    }
}

adjust_padding = (viz) => {
    padding = (window.screen.width - 1300)/2
    if(padding < 0)
        padding = 0
    document.getElementById(viz).style.paddingLeft = padding + 'px'
}
//EVENT 1

//GLOBAL
load_viz1_global = (viz) => {

    //<div class='tableauPlaceholder' id='viz1650540411881' style='position: relative'><noscript><a href='#'><img alt='Finanacial-Crash ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Finanacial-Crash&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Global-data&#47;Finanacial-Crash' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Finanacial-Crash&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1650540411881');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1300px';vizElement.style.height='927px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1300px';vizElement.style.height='927px';} else { vizElement.style.width='100%';vizElement.style.height='1627px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
    clear_current_viz();
    document.getElementsByClassName("dropdown")[0].style.display = 'block'
    document.getElementById("dropdown_global").onclick = ()=>{load_viz1_global(viz)}
    document.getElementById("dropdown_regional").onclick = ()=>{load_viz1_regional('Financial-US-Regional')}

    var body = document.getElementsByClassName("timeline")[0].parentNode
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id',viz)
    newDiv.setAttribute('class','tableauPlaceholder')
    newDiv.setAttribute('style','position: relative;padding-left: 140px;display: none;z-index: -1;')
    body.appendChild(newDiv)

    adjust_padding(viz);
    var header = document.createElement('h1');
    header.innerText = viz
    document.getElementById("vizName").appendChild(header);

    var divElement = document.getElementById(viz);                    
    divElement.style.display = 'block'
    current_viz = viz;
    divElement.innerHTML = "<noscript><a href='#'><img alt='Finanacial-Crash ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Finanacial-Crash&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Global-data&#47;Finanacial-Crash' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Finanacial-Crash&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object>"
    //divElement.innerHTML = "<noscript><a href='#'><img alt='Chinese-Crash ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Chinese-Crash&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Global-data&#47;Chinese-Crash' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Chinese-Crash&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object>"
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else { 
        vizElement.style.width='100%';vizElement.style.height='977px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
    divElement.style.width = '100%'
}

//REGIONAL
load_viz1_regional = (viz) => {
    clear_current_viz();
    document.getElementsByClassName("dropdown")[0].style.display = 'block'

    document.getElementById("dropdown_global").onclick = ()=>{load_viz1_global("Financial-US-Global")}
    document.getElementById("dropdown_regional").onclick = ()=>{load_viz1_regional(viz)}

    var body = document.getElementsByClassName("timeline")[0].parentNode
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id',viz)
    newDiv.setAttribute('class','tableauPlaceholder')
    newDiv.setAttribute('style','position: relative;padding-left: 140px;display: none;z-index: -1;')
    body.appendChild(newDiv)

    adjust_padding(viz);
    var header = document.createElement('h1');
    header.innerText = viz
    document.getElementById("vizName").appendChild(header);

    var divElement = document.getElementById(viz);                    
    divElement.style.display = 'block'
    current_viz = viz;
    divElement.innerHTML = "<noscript>            <a href='#'>                <img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1_rss.png' style='border: none' />            </a>        </noscript>        <object class='tableauViz'  style='display:none;'>            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' />             <param name='path' value='shared&#47;QFCK3BG7F' /> <param name='toolbar' value='yes' />            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1.png' />             <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />            <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />            <param name='filter' value='publish=yes' /></object>"
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else { 
        vizElement.style.width='100%';vizElement.style.height='977px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
    divElement.style.width = '100%'
}

//EVENT 2

//GLOBAL
load_viz2_global = (viz) => {


    //<div class='tableauPlaceholder' id='viz1650540787951' style='position: relative'><noscript><a href='#'><img alt='Japan-Flood ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Japan-Flood&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Global-data&#47;Japan-Flood' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Japan-Flood&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1650540787951');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1300px';vizElement.style.height='927px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1300px';vizElement.style.height='927px';} else { vizElement.style.width='100%';vizElement.style.height='1627px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
    clear_current_viz();
    document.getElementsByClassName("dropdown")[0].style.display = 'block'

    document.getElementById("dropdown_global").onclick = ()=>{load_viz2_global(viz)}
    document.getElementById("dropdown_regional").onclick = ()=>{load_viz2_regional('Japan-Tsunami-Regional')}

    var body = document.getElementsByClassName("timeline")[0].parentNode
    //var tableauVizes = document.getElementById("tablueaVizes")
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id',viz)
    newDiv.setAttribute('class','tableauPlaceholder')
    newDiv.setAttribute('style','position: relative;padding-left: 140px;display: none;z-index: -1;')
    body.appendChild(newDiv)

    adjust_padding(viz);
    var header = document.createElement('h1');
    header.innerText = viz
    document.getElementById("vizName").appendChild(header);

    var divElement = document.getElementById(viz);                    
    divElement.style.display = 'block'
    current_viz = viz;
    divElement.innerHTML = "<noscript><a href='#'><img alt='Japan-Flood ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Japan-Flood&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Global-data&#47;Japan-Flood' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Japan-Flood&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object>"
    //divElement.innerHTML = "<noscript>            <a href='#'>                <img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1_rss.png' style='border: none' />            </a>        </noscript>        <object class='tableauViz'  style='display:none;'>            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' />             <param name='path' value='shared&#47;QFCK3BG7F' /> <param name='toolbar' value='yes' />            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1.png' />             <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />            <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />            <param name='filter' value='publish=yes' /></object>"
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else { 
        vizElement.style.width='100%';vizElement.style.height='977px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
    divElement.style.width = '100%'
}

//REGIONAL
load_viz2_regional = (viz) => {
    clear_current_viz();
    document.getElementsByClassName("dropdown")[0].style.display = 'block'
    var body = document.getElementsByClassName("timeline")[0].parentNode

    document.getElementById("dropdown_global").onclick = ()=>{load_viz2_global("Japan-Tsunami-Global")}
    document.getElementById("dropdown_regional").onclick = ()=>{load_viz2_regional(viz)}

    //var tableauVizes = document.getElementById("tablueaVizes")
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id',viz)
    newDiv.setAttribute('class','tableauPlaceholder')
    newDiv.setAttribute('style','position: relative;padding-left: 140px;display: none;z-index: -1;')
    body.appendChild(newDiv)

    adjust_padding(viz);
    var header = document.createElement('h1');
    header.innerText = viz
    document.getElementById("vizName").appendChild(header);

    var divElement = document.getElementById(viz);                    
    divElement.style.display = 'block'
    current_viz = viz;
    divElement.innerHTML = "<noscript>            <a href='#'>                <img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1_rss.png' style='border: none' />            </a>        </noscript>        <object class='tableauViz'  style='display:none;'>            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' />             <param name='path' value='shared&#47;QFCK3BG7F' /> <param name='toolbar' value='yes' />            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1.png' />             <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />            <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />            <param name='filter' value='publish=yes' /></object>"
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else { 
        vizElement.style.width='100%';vizElement.style.height='977px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
    divElement.style.width = '100%'
}

//EVENT 3

//GLOBAL
load_viz3_global = (viz) => {
    clear_current_viz();

    document.getElementsByClassName("dropdown")[0].style.display = 'block'

    document.getElementById("dropdown_global").onclick = ()=>{load_viz3_global(viz)}
    document.getElementById("dropdown_regional").onclick = ()=>{load_viz3_regional('Chinese-Crash-Regional')}

    var body = document.getElementsByClassName("timeline")[0].parentNode
    //var tableauVizes = document.getElementById("tablueaVizes")
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id',viz)
    newDiv.setAttribute('class','tableauPlaceholder')
    newDiv.setAttribute('style','position: relative;padding-left: 140px;display: none;z-index: -1;')
    body.appendChild(newDiv)

    adjust_padding(viz);
    var header = document.createElement('h1');
    header.innerText = viz
    document.getElementById("vizName").appendChild(header);

    var divElement = document.getElementById(viz);                    
    divElement.style.display = 'block'
    current_viz = viz;
    //divElement.innerHTML = "<noscript>            <a href='#'>                <img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1_rss.png' style='border: none' />            </a>        </noscript>        <object class='tableauViz'  style='display:none;'>            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' />             <param name='path' value='shared&#47;QFCK3BG7F' /> <param name='toolbar' value='yes' />            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1.png' />             <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />            <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />            <param name='filter' value='publish=yes' /></object>"
    divElement.innerHTML = "<noscript><a href='#'><img alt='Chinese-Crash ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Chinese-Crash&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Global-data&#47;Chinese-Crash' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Chinese-Crash&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object>"
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else { 
        vizElement.style.width='100%';vizElement.style.height='977px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
    divElement.style.width = '100%'
}


load_viz3_regional = (viz) => {
    clear_current_viz();
    document.getElementsByClassName("dropdown")[0].style.display = 'block'
    var body = document.getElementsByClassName("timeline")[0].parentNode

    document.getElementById("dropdown_global").onclick = ()=>{load_viz3_global("Chinese-Crash-Global")}
    document.getElementById("dropdown_regional").onclick = ()=>{load_viz3_regional(viz)}

    //var tableauVizes = document.getElementById("tablueaVizes")
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id',viz)
    newDiv.setAttribute('class','tableauPlaceholder')
    newDiv.setAttribute('style','position: relative;padding-left: 140px;display: none;z-index: -1;')
    body.appendChild(newDiv)

    adjust_padding(viz);
    var header = document.createElement('h1');
    header.innerText = viz
    document.getElementById("vizName").appendChild(header);

    var divElement = document.getElementById(viz);                    
    divElement.style.display = 'block'
    current_viz = viz;
    divElement.innerHTML = "<noscript>            <a href='#'>                <img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1_rss.png' style='border: none' />            </a>        </noscript>        <object class='tableauViz'  style='display:none;'>            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' />             <param name='path' value='shared&#47;QFCK3BG7F' /> <param name='toolbar' value='yes' />            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1.png' />             <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />            <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />            <param name='filter' value='publish=yes' /></object>"
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else { 
        vizElement.style.width='100%';vizElement.style.height='977px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
    divElement.style.width = '100%'
}


load_viz4_global = (viz) => {
    //<div class='tableauPlaceholder' id='viz1650540161498' style='position: relative'><noscript><a href='#'><img alt='Covid-19 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Covid-19&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Global-data&#47;Covid-19' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Covid-19&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1650540161498');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1300px';vizElement.style.height='927px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1300px';vizElement.style.height='927px';} else { vizElement.style.width='100%';vizElement.style.height='1627px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
    clear_current_viz();
    document.getElementsByClassName("dropdown")[0].style.display = 'block'

    document.getElementById("dropdown_global").onclick = ()=>{load_viz4_global(viz)}
    document.getElementById("dropdown_regional").onclick = ()=>{load_viz4_regional('Covid-19-Regional')}

    var body = document.getElementsByClassName("timeline")[0].parentNode
    //var tableauVizes = document.getElementById("tablueaVizes")
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id',viz)
    newDiv.setAttribute('class','tableauPlaceholder')
    newDiv.setAttribute('style','position: relative;padding-left: 140px;display: none;z-index: -1;')
    body.appendChild(newDiv)

    adjust_padding(viz);
    var header = document.createElement('h1');
    header.innerText = viz
    document.getElementById("vizName").appendChild(header);

    var divElement = document.getElementById(viz);                    
    divElement.style.display = 'block'
    current_viz = viz;
    divElement.innerHTML = "<noscript><a href='#'><img alt='Covid-19 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Covid-19&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Global-data&#47;Covid-19' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Covid-19&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object>"
    //divElement.innerHTML = "<noscript>            <a href='#'>                <img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1_rss.png' style='border: none' />            </a>        </noscript>        <object class='tableauViz'  style='display:none;'>            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' />             <param name='path' value='shared&#47;QFCK3BG7F' /> <param name='toolbar' value='yes' />            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1.png' />             <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />            <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />            <param name='filter' value='publish=yes' /></object>"
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else { 
        vizElement.style.width='100%';vizElement.style.height='977px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
    divElement.style.width = '100%'
}


load_viz4_regional = (viz) => {
    clear_current_viz();
    document.getElementsByClassName("dropdown")[0].style.display = 'block'
    var body = document.getElementsByClassName("timeline")[0].parentNode

    document.getElementById("dropdown_global").onclick = ()=>{load_viz4_global("Covid-19-Global")}
    document.getElementById("dropdown_regional").onclick = ()=>{load_viz4_regional(viz)}

    //var tableauVizes = document.getElementById("tablueaVizes")
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id',viz)
    newDiv.setAttribute('class','tableauPlaceholder')
    newDiv.setAttribute('style','position: relative;padding-left: 140px;display: none;z-index: -1;')
    body.appendChild(newDiv)

    adjust_padding(viz);
    var header = document.createElement('h1');
    header.innerText = viz
    document.getElementById("vizName").appendChild(header);

    var divElement = document.getElementById(viz);                    
    divElement.style.display = 'block'
    current_viz = viz;
    divElement.innerHTML = "<noscript>            <a href='#'>                <img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1_rss.png' style='border: none' />            </a>        </noscript>        <object class='tableauViz'  style='display:none;'>            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' />             <param name='path' value='shared&#47;QFCK3BG7F' /> <param name='toolbar' value='yes' />            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1.png' />             <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />            <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />            <param name='filter' value='publish=yes' /></object>"
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else { 
        vizElement.style.width='100%';vizElement.style.height='977px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
    divElement.style.width = '100%'
}


load_viz5_global = (viz) => {
    
    //<div class='tableauPlaceholder' id='viz1650543348203' style='position: relative'><noscript><a href='#'><img alt='Russia-Ukraine ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Russia-Ukraine&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Global-data&#47;Russia-Ukraine' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Russia-Ukraine&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1650543348203');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1300px';vizElement.style.height='927px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1300px';vizElement.style.height='927px';} else { vizElement.style.width='100%';vizElement.style.height='1627px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>

    clear_current_viz();
    document.getElementsByClassName("dropdown")[0].style.display = 'block'

    document.getElementById("dropdown_global").onclick = ()=>{load_viz5_global(viz)}
    document.getElementById("dropdown_regional").onclick = ()=>{load_viz5_regional('Russia-Ukraine-Regional')}

    var body = document.getElementsByClassName("timeline")[0].parentNode
    //var tableauVizes = document.getElementById("tablueaVizes")
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id',viz)
    newDiv.setAttribute('class','tableauPlaceholder')
    newDiv.setAttribute('style','position: relative;padding-left: 140px;display: none;z-index: -1;')
    body.appendChild(newDiv)

    adjust_padding(viz);
    var header = document.createElement('h1');
    header.innerText = viz
    document.getElementById("vizName").appendChild(header);

    var divElement = document.getElementById(viz);                    
    divElement.style.display = 'block'
    current_viz = viz;
    divElement.innerHTML = "<noscript><a href='#'><img alt='Russia-Ukraine ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Russia-Ukraine&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Global-data&#47;Russia-Ukraine' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;Global-data&#47;Russia-Ukraine&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /><param name='filter' value='publish=yes' /></object>"
    //divElement.innerHTML = "<noscript>            <a href='#'>                <img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1_rss.png' style='border: none' />            </a>        </noscript>        <object class='tableauViz'  style='display:none;'>            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' />             <param name='path' value='shared&#47;QFCK3BG7F' /> <param name='toolbar' value='yes' />            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1.png' />             <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />            <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />            <param name='filter' value='publish=yes' /></object>"
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else { 
        vizElement.style.width='100%';vizElement.style.height='977px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
    divElement.style.width = '100%'
}


load_viz5_regional = (viz) => {
    clear_current_viz();
    document.getElementsByClassName("dropdown")[0].style.display = 'block'
    var body = document.getElementsByClassName("timeline")[0].parentNode

    document.getElementById("dropdown_global").onclick = ()=>{load_viz5_global("Russia-Ukraine-Global")}
    document.getElementById("dropdown_regional").onclick = ()=>{load_viz5_regional(viz)}

    //var tableauVizes = document.getElementById("tablueaVizes")
    var newDiv = document.createElement('div')
    newDiv.setAttribute('id',viz)
    newDiv.setAttribute('class','tableauPlaceholder')
    newDiv.setAttribute('style','position: relative;padding-left: 140px;display: none;z-index: -1;')
    body.appendChild(newDiv)

    adjust_padding(viz);
    var header = document.createElement('h1');
    header.innerText = viz
    document.getElementById("vizName").appendChild(header);

    var divElement = document.getElementById(viz);                    
    divElement.style.display = 'block'
    current_viz = viz;
    divElement.innerHTML = "<noscript>            <a href='#'>                <img alt='Dashboard 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1_rss.png' style='border: none' />            </a>        </noscript>        <object class='tableauViz'  style='display:none;'>            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' />             <param name='path' value='shared&#47;QFCK3BG7F' /> <param name='toolbar' value='yes' />            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;QF&#47;QFCK3BG7F&#47;1.png' />             <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />            <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />            <param name='filter' value='publish=yes' /></object>"
    var vizElement = divElement.getElementsByTagName('object')[0];                    
    if ( divElement.offsetWidth > 800 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else if ( divElement.offsetWidth > 500 ) { 
        vizElement.style.width='1300px';vizElement.style.height='827px';
    } 
    else { 
        vizElement.style.width='100%';vizElement.style.height='977px';
    }                     
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);                
    divElement.style.width = '100%'
}