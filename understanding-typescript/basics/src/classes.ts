abstract class Department {
  static fiscalYear = 2020; // static exist without instance, so we don't need to use 'this' keyword to acces to it inside this class
  //   private readonly id: string;
  //   private name: string;
  protected employees: string[] = []; //protected is like private but, this ensures that this property is available in all the classes which extends this class

  constructor(protected readonly id: string, private name: string) {
    //using readonly, ensures that this id is asigned only once (When the object is created);
    //this is a shorthand which allows us to make private these values and stores the values automatically
    //this.name = n;
    console.log(Department.fiscalYear); // to access to static values or methods, we must to use the name of the class, point (.) and the name of the static value
  }

  static createEmployee(name: string) {
    // the get access without instantiate the class, we use static
    return { name: name };
  }

  abstract describe(this: Department): void; // inherit classes must to implement this class

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // this class gets automatically the base class including its constructor
  constructor(id: string, public admins: string[] = ["Max"]) {
    ///admins are automatically stored
    super(id, "IT"); // calls the constructor of the base class;
  }

  describe() {
    // overides the describe method of the parent class
    console.log("Accounting Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  // this class gets automatically the base class including its constructor

  private lastReport: string;
  private static instance: AccountingDepartment; // this stores an AccountingDepartament instance

  get mostRecetReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw "No report found.";
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw "Please pass in a valid value!";
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    //this ensures that we can't call new on this
    ///admins are automatically stored
    super(id, "Accounting"); // calls the constructor of the base class;
    this.lastReport = reports[0];
  }

  static getInstance() {
    // how the constuctor is private, we must to ensure we can 'create an instance'
    if (AccountingDepartment.instance) {
      return this.instance;
    } else {
      this.instance = new AccountingDepartment("d2", []);
      return this.instance;
    }
  }

  describe() {
    // overides the describe method of the parent class
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1");

it.addEmployee("Max");
it.addEmployee("Anna");

it.describe();
it.printEmployeeInformation();

console.log(it);

//const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance(); //singleton
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2); // these are the same instance

accounting.mostRecentReport = "";

accounting.addReport("Something went wrong");

console.log(accounting.mostRecetReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { describe: accounting.describe, name: "AccountingCpu" };
// accountingCopy.describe();
