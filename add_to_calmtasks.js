let http = HTTP.create();

let response = http.request({
  url: "http://localhost:3000/add/by/text",
  method: "POST",
  data: {
    text: draft.content,
  },
});

if (!response.success) {
  context.fail();
}
