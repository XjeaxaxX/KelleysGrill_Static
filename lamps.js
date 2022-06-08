

function generateLampImagesHtml(){
	let t = document.getElementById('lampImages');
	let h = '';
	let i = 1;
	
	for(let x=i, l=numImages; x<=l; x++){
		h += `
		<td>
			<a href="orig/${getImageName(x)}.jpg" target="_blank"><img src="${getImageName(x)}.jpg"></a>
		</td>`;
		i++;
	}
	
	for(let x=i, l=i+numVideos-1; x<=l; x++){
		h += `
		<td>
			<video width="320" height="240" controls>
				<source src="${getImageName(x)}.mp4" type="video/mp4">
				Your browser does not support the video tag.
			</video>
		</td>`;
		i++;
	}

	for(let x=0, l=arrVideoLinks.length; x<l; x++){
		h += `
		<td>
			<iframe
			  width="560"
			  height="315"
			  src="${arrVideoLinks[x]}"
			  frameborder="0"
			  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			  allowfullscreen>
			</iframe>		
		</td>
		`;
	}
	
	h = `
	<tr>${h}
	</tr>
`;
		
	t.innerHTML =h;
}


function getImageName(i){
	let r = '';
	if(i<10){
		return '0' + i.toString();
	} else {
		return i.toString();
	}
}
