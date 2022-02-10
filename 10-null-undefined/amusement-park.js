//1. Create a new visitor
function createVisitor(name, age, ticketId) {
  const obj = {
    name : name,
    age : age,
    ticketId : ticketId
  }
  return obj
}


//2. Revoke the ticket
function revokeTicket(visitor) {
  visitor.ticketId = null
  return visitor
}

//3. Determine the ticket status
function ticketStatus(tickets, ticketId) {
  if (!tickets.hasOwnProperty(ticketId))
    return 'unknown ticket id'
  if (tickets[ticketId] == null)
    return `not sold`
  return `sold to ${tickets[ticketId]}`
}

//4. Improve the ticket status response
function simpleTicketStatus(tickets, ticketId) {
  if (!tickets.hasOwnProperty(ticketId) || tickets[ticketId] == null)
    return 'invalid ticket !!!'
  return tickets[ticketId]
}

//5. Determine the version of terms and conditions
function gtcVersion(visitor) {
  return visitor.gtc?.version
}

export {createVisitor, revokeTicket, ticketStatus, simpleTicketStatus, gtcVersion}