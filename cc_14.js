// Task 2: Adding Support Tickets Dynamically
function createSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById("ticketContainer");
  
    const ticket = document.createElement("div");
    ticket.classList.add("supportTicket");
  
    // Customer Name
    const name = document.createElement("h3");
    name.textContent = customerName;
  
    // Issue Description
    const issue = document.createElement("p");
    issue.textContent = issueDescription;
  
    // Priority Level
    const priority = document.createElement("p");
    priority.textContent = `Priority: ${priorityLevel}`;
    if (priorityLevel === "High") {
      ticket.classList.add("highPriority");
    }
  
    // Resolve Button
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolveButton");
  
    // Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("editButton");
  
    // Add the elements to the ticket
    ticket.appendChild(name);
    ticket.appendChild(issue);
    ticket.appendChild(priority);
    ticket.appendChild(editButton);
    ticket.appendChild(resolveButton);
  
    // Append the ticket to the container
    ticketContainer.appendChild(ticket);
  
    // Resolve button functionality
    resolveButton.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent event bubbling
      ticket.remove();
    });
  
    // Edit functionality
    editButton.addEventListener("click", function() {
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.value = name.textContent;
  
      const issueInput = document.createElement("input");
      issueInput.type = "text";
      issueInput.value = issue.textContent;
  
      const priorityInput = document.createElement("input");
      priorityInput.type = "text";
      priorityInput.value = priority.textContent;
  
      ticket.replaceChild(nameInput, name);
      ticket.replaceChild(issueInput, issue);
      ticket.replaceChild(priorityInput, priority);
  
      editButton.textContent = "Save";
  
      editButton.addEventListener("click", function() {
        name.textContent = nameInput.value;
        issue.textContent = issueInput.value;
        priority.textContent = priorityInput.value;
  
        ticket.replaceChild(name, nameInput);
        ticket.replaceChild(issue, issueInput);
        ticket.replaceChild(priority, priorityInput);
  
        editButton.textContent = "Edit";
      });
    });
  }
  
  // Task 3: Highlighting High Priority Tickets
  function highlightHighPriorityTickets() {
    const tickets = document.querySelectorAll(".highPriority");
  
    Array.from(tickets).forEach(ticket => {
      ticket.style.backgroundColor = "#ffcccb"; // Change background color
      ticket.style.border = "2px solid red";   // Add a red border
    });
  }
  
  // Example usage for dynamically adding tickets
  createSupportTicket("John Doe", "Unable to log in", "High");
  createSupportTicket("Jane Smith", "Website is down", "Low");
  
  // Task 4: Support Ticket Resolution with Event Bubbling
  // Event listener for the "ticketContainer"
  const ticketContainer = document.getElementById("ticketContainer");
  
  ticketContainer.addEventListener("click", function(event) {
    console.log("A ticket was clicked!");
  }, true); // Capture phase
  
  // Example usage to highlight high priority tickets
  highlightHighPriorityTickets();
  