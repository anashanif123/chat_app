import jwt from "jsonwebtoken"

export const generateToken=(userId,res) => {

    const token =jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    res.cookie("JWT",{
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, // secure: true, // for production
        sameSite: "strict", // for production
         secure:process.env.NODE_ENV !== "developmenet", // for production
    })

    return token;
}