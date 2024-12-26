const baseUrl = "";
	document.getElementById('quiz-form').addEventListener("submit",async(e)=>{
	  e.preventDefault();
	  const newQuestion={
	    title: document.getElementById("question").value,
	    optionA: document.getElementById("optionA").value,
	    optionB: document.getElementById("optionB").value,
	    optionC: document.getElementById("optionC").value,
	    optionD: document.getElementById("optionD").value,
	    correctOption: document.getElementById("correctOption").value,
	    reviewStatus:false,
	  };
	  await fetch(baseUrl,{
	    method: "POST",
	    headers: {"Content-Type":"application/json"},
	    body:JSON.stringify(newQuestion),
	  });
	  alert("Question Created");
	  loadQuestion();
	});
	async function loadQuestions(){
	  const res = await fetch(baseUrl);
	  	  const question = await res.json();
	  	  	  const container = document.getElementById("questions-container");
	  	  	  container.innerHTML="";
	  	  	  
	  	  	  questions.forEach((q)=>
	  	  	  const card=document.createElement("div");
	  	  	  card.className="card";
	  	  	  card.style.borderColor = q.reviewStatus ? "violet" : "blue";
	  	  	  card.innerHTML =`
	  	  	  <p> ${q.title}</p>
	  	  	  <p> Options: A) ${q.optionA}  B) ${q.optionB} C) ${q.optionC} D) ${q.optionD}
	  	  	  </p>
	  	  	  <button class="review" data-id="${q.id}"> Review</button>
	  	  	  <button class="delete" data-id="${q.id}"> delete</button>
	  	  	  `;
	  	  	  container.appendChild(card);
	});
	}
	
	document.addEventListener("click",async(e)=>{
	  if(e.target.classList.contains("review")){
	    if(confirm("Are you sure to review the question?")){
	      const id = e.target.dataset.id;
	      await fetch(`${baseUrl}/${id}`,{
	        method: "PATCH",
	        headres: {"Content-Type": "application/json"},
	        body: JSON.stringify({reviewStatus:true}),
	      });
	      loadQuestions();
	    }
	  }else if(e.target.classList.contains("delete")){
	    if(confirm("Are you sure to delete?")){
	       const id = e.target.dataset.id;
	      await fetch(`${baseUrl}/${id}`,{
	        method: "DELETE",
	      });
	      loadQuestions();
	    }
	    }
	});
	loadQuestions();
  
	    
	    
	    
	    
	    
	    
	    
	    
	    
	  }
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
