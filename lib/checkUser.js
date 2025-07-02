import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma";

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) {
        return null
    }

    try {
        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id,
            },
            include: {
                transactions: {
                    where: {
                        type: "CREDIT_PURCHASE",
                        createdAt: {
                            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                        },
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: 1,
                },
            },
        });

        if (loggedInUser) {
            return loggedInUser;
        }

        const name = `${user.firstName} ${user.lastName}`

        const newUSer = await db.user.create({
            data: {
                clerkUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
                transactions: {
                    create: {
                        type: "CREDIT_PURCHASE",
                        packageId: "free_user",
                        amount: 2,
                    },
                },
            },
        });

        return newUSer();
    } catch (error) {
        console.log(error.message)

    }
}