function update_releases()
{
    let releases_list = document.getElementById("releases-list")

    let latest_release_name = document.getElementById("latest-release-name")
    let release_list_div = document.getElementById("release-list-div")

    fetch('https://api.github.com/repos/skiftOS/skift/releases/latest')
    .then(res => res.json())
    .then((out) => {

        let release = out;

        let release_list_content = ""

        latest_release_name.innerHTML = release["tag_name"];

        for (const keyAsset in release["assets"])
        {
            let icon
            let asset = release["assets"][keyAsset];

            if (asset["name"] == "bootdisk.iso")
            {
                icon = "album"
            }
            else
            {
                icon = "insert_drive_file"
            }

            release_list_content += `<a href="${asset["browser_download_url"]}" class="dl-item"><span class="material-icons icon-dl">${icon}</span>${asset["name"]}</a>`;
        }

        release_list_content += `<a href="${release["tarball_url"]}" class="dl-item"><span class="material-icons icon-dl">topic</span>tarball</a>`;
        release_list_content += `<a href="${release["zipball_url"]}" class="dl-item"><span class="material-icons icon-dl">topic</span>zip</a>`;

        release_list_div.innerHTML += release_list_content

    }).catch(err => releases_list.innerHTML = "Failled to fetch releases... sorry :/");
}

update_releases();
