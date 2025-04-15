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
    const result = [];
    for (let i = 0; i < this.members.length; i++) {
      result.push(this.members[i]);
    }
    return result;
  }

  // Get a specific member by ID or name
  getMember(identifier) {
    for (let i = 0; i < this.members.length; i++) {
      const member = this.members[i];
      if (member.id === identifier || 
          member.name.toLowerCase() === identifier.toString().toLowerCase()) {
        return member;
      }
    }
    return undefined;
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
    let foundIndex = -1;
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].id === memberId) {
        foundIndex = i;
        break;
      }
    }
    
    if (foundIndex === -1) {
      return { error: "Member not found" };
    }
    
    // Rebuild array without the member at foundIndex
    const newMembers = [];
    const removedMember = this.members[foundIndex];
    for (let i = 0; i < this.members.length; i++) {
      if (i !== foundIndex) {
        newMembers.push(this.members[i]);
      }
    }
    
    this.members = newMembers;
    return { success: true, removedMember };
  }

  // Get contribution history
  getHistory() {
    const result = [];
    for (let i = 0; i < this.contributionHistory.length; i++) {
      result.push(this.contributionHistory[i]);
    }
    return result;
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
