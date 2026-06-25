const { verificaMail } = require("../src/mail")
describe("Verificación de Mail", () => {
    test("probar mail general", () => {
        expect(verificaMail("hola@google.com")).toBe(true);
    })
    test("probar sin arroba", () => {
        expect(verificaMail("holagoogle.com")).not.toBeTruthy();
    })
    test("probar mail null", () => {
        expect(verificaMail(null)).not.toBeTruthy();
    })
});