<h1 align="center">
  AuctionArena
</h1>

A comprehensive auction platform using the MERN stack for the Business Plan event, enabling auctioneers 
and teams to track budgets and expenses in real time.

<h3>
  Block Diagram
</h3>

[![Screenshot-2024-07-31-002453.png](https://i.postimg.cc/W3dMJLn8/Screenshot-2024-07-31-002453.png)](https://postimg.cc/47TKr0jH)


**Admin:**

Represents the administrator of the auction platform.
Interacts with the backend to manage auction-related tasks.
Has a bidirectional communication flow with the backend.

**Team:**

Represents the teams participating in the auction.
Each team interacts with the backend to track own Budget as well as other team Budgets.
Has a one directional communication flow with the backend.

**Backend:**

Central component managing the auction process.
Handles requests from both the admin and the teams.
Manages the auction logic and maintains the current state of the auction.
Communicates with MongoDB to store and retrieve auction data.

**MongoDB:**

Database used to store auction-related data such as company details, and team information.
Communicates with the backend to perform data operations.

**Users (m and n):**
Represents multiple instances of admin users (m) and team users (n).
Interact with their respective interfaces (Admin or Team) which communicate with the backend.
