const { z } = require("zod");

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const RegsiterValidator = z.object({
  username: z
    .string()
    .min(3, { message: "Username should be at least 3 characters long" }),
  name: z
    .string()
    .min(3, { message: "name should be at least 3 characters long" }),
  surname: z
    .string()
    .min(3, { message: "surname should be at least 3 characters long" }),
  /* company_name: z
    .string()
    .min(3, { message: "Company name should be at least 3 characters long" }), */
  phone: z.string().regex(phoneRegex, "Invalid phone number"),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters long" }),
});
