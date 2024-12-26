const baseUrl="";
async function loadReviewQuestions(){
   const res = await fetch(`$baseUrl}?reviewStatus=true`);
	 const question = await res.json();
	 const container = document.getElementById("reviewed-questionsr");
	 container.innerHTML="";
	  	  	  
	  	  	  questions.forEach((q)=>
	  	  	  const card=document.createElement("div");
	  	  	  card.className="card";
	  	  	  card.style.borderColor = "violet";
	  	  	  card.innerHTML =`
	  	  	  <p> ${q.title}</p>
	  	  	  <p> Options: A) ${q.optionA}  B) ${q.optionB} C) ${q.optionC} D) ${q.optionD}
	  	  	  </p>
	  	  	  `;
	  	  	  container.appendChild(card);
});
}
loadReviewQuestions();
