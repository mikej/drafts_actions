let credential = Credential.create("Calmtasks");
credential.addPasswordField("api_key", "API key");

credential.authorize();

let http = HTTP.create();

let response = http.request({
  url: "http://localhost:3000/add/by/text",
  method: "POST",
  headers: {
    Authorization: `Bearer ${credential.getValue("api_key")}`,
  },
  data: {
    text: draft.content,
  },
});

if (!response.success) {
  context.fail();
}
