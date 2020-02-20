function gooooogle(event) {
  // read & process user input
  const UserSearch = event.target.form.query.value;
  // call the core logic
  const variable = googleURL(searchQuery);
  // render results for the user
  window.Open;
  // log action for developers
  console.log("\n-- user action --");
  console.log("variable:", "(" + typeof variable + ")", variable);

  // tell the browser everything is OK
  return true;
}
