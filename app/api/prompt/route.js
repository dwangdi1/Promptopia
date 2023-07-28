import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator'); //adds the creator so we can see who created it 

        return new Response(JSON.stringify(prompts), {status:200});
    } catch (error) {
        return new Response("Failed to fetch all prompts", {status: 500})
    }   
}