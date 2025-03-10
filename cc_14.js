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
  
    // Add the elements to the ticket
    ticket.appendChild(name);
    ticket.appendChild(issue);
    ticket.appendChild(priority);
    ticket.appendChild(resolveButton);
  
    // Append the ticket to the container
    ticketContainer.appendChild(ticket);
  
    // Resolve button functionality
    resolveButton.addEventListener("click", function(event) {
      ticketContainer.removeChild(ticket);
    });
  }
  
  // Example Usage: Adding a new support ticket
  createSupportTicket("John Doe", "Unable to log in", "High");
  createSupportTicket("Jane Smith", "Website is down", "Low");

// Task 3: Highlighting High Priority Tickets

function highlightHighPriorityTickets() {
    const tickets = document.querySelectorAll(".highPriority");
    
    Array.from(tickets).forEach(ticket => {
      ticket.style.backgroundColor = "#ffcccb"; // Change background color
      ticket.style.border = "2px solid red";   // Add a red border
    });
  }
  
  // Example usage
  highlightHighPriorityTickets();
  