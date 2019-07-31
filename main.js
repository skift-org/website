function update_releases() 
{
    let releases_list = document.getElementById("releases-list")

    fetch('https://api.github.com/repos/skiftOS/skift/releases')
    .then(res => res.json())
    .then((out) => {
        for (const key in out) 
        {
            let release = out[key];
            let item_content = "<li>"

            item_content += release["tag_name"] + " ";

            for (const keyAsset in release["assets"]) 
            {
                let asset = release["assets"][keyAsset];
                item_content += "<a href=" + asset["browser_download_url"] + ">" + asset["name"] + "</a> " ;
            }

            item_content += "<a href=" + release["tarball_url"] + ">targball</a> " ;
            item_content += "<a href=" + release["zipball_url"] + ">zipball</a> " ;

            item_content += "</li>"

            releases_list.innerHTML = item_content;
        }
    }).catch(err => releases_list.innerHTML = "Failled to fetch releases... sorry :/");
}

update_releases();