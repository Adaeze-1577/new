class Adashe {
    constructor() {
      this.members = [];
      this.contributionPool = 0;
      this.contributionHistory = [];
    }
  
    // Add a new member to the system
    addMember(name, initialContribution = 0) {
      const newMember = {
        id: this.members.length + 1,
        name,
        totalContributed: initialContribution,
        lastContributionDate: new Date()
      };
      
      this.members.push(newMember);
      this.contributionPool += initialContribution;
      
      if (initialContribution > 0) {
        this.contributionHistory.push({
          memberId: newMember.id,
          name,
          amount: initialContribution,
          date: new Date()
        });
      }
      
      return newMember;
    }
  
    // Get all members
    allMembers() {
      return this.members;
    }
  
    // Get a specific member by ID or name
    getMember(identifier) {
      return this.members.find(member => 
        member.id === identifier || member.name.toLowerCase() === identifier.toLowerCase()
      );
    }
  
    // Make a contribution
    contribute(memberId, amount) {
      const member = this.getMember(memberId);
      
      if (!member) {
        return { error: "Member not found" };
      }
      
      member.totalContributed += amount;
      member.lastContributionDate = new Date();
      this.contributionPool += amount;
      
      this.contributionHistory.push({
        memberId: member.id,
        name: member.name,
        amount,
        date: new Date()
      });
      
      return { success: true, newBalance: this.contributionPool };
    }
  
    // Withdraw cash from the pool
    withdrawCash(amount, purpose) {
      if (amount > this.contributionPool) {
        return { error: "Insufficient funds" };
      }
      
      this.contributionPool -= amount;
      
      return {
        success: true,
        amountWithdrawn: amount,
        remainingBalance: this.contributionPool,
        purpose,
        date: new Date()
      };
    }
  
    // Remove a member from the system
    removeMember(memberId) {
      const index = this.members.findIndex(member => member.id === memberId);
      
      if (index === -1) {
        return { error: "Member not found" };
      }
      
      const [removedMember] = this.members.splice(index, 1);
      return { success: true, removedMember };
    }
  
    // Get contribution history
    getHistory() {
      return this.contributionHistory;
    }
  
    // Get total pool amount
    getPoolBalance() {
      return this.contributionPool;
    }
  }
  
  // test the Adashe class
  const ajahAdashe = new Adashe();
  
  // Add members
  ajahAdashe.addMember("Mrs. Adebayo", 5000);
  ajahAdashe.addMember("Mrs. Chukwu", 3000);
  ajahAdashe.addMember("Mrs. Okafor");
  
  // Make contributions
  ajahAdashe.contribute(1, 2000); 
  ajahAdashe.contribute("Mrs. Chukwu", 4000); 
  
  // View all members
  console.log(ajahAdashe.allMembers());
  
  // Withdraw cash
  console.log(ajahAdashe.withdrawCash(8000, "Emergency fund"));
  
  // Get a member
  console.log(ajahAdashe.getMember(2));
  
  // Remove a member
  console.log(ajahAdashe.removeMember(3));
  
  // Check pool balance
  console.log("Current pool balance:", ajahAdashe.getPoolBalance());
  
  // View history
  console.log(ajahAdashe.getHistory());
  