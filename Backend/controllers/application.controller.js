import { Application } from './../models/application.model.js';
import { Job } from '../models/job.model.js';

export const applyJob = async (req, res) => {
    try {
        const userId = req.id
        const jobId = req.params.id
        if (!jobId) {
            return res.status(404).json({
                message: "Job id is required",
                success: false
            })
        }
        // check if user has already applied
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId })
        if (existingApplication) {
            return res.status(404).json({
                message: "You have already applied for this job",
                success: false
            })
        }
        //check if the job exist
        const job = await Job.findById(jobId)
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }

        //create new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        })
        job.applications.push(newApplication._id)
        await job.save();
        return res.status(201).json({
            message: "Job applied Successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}


//get applied jobs

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'company',
                options: { sort: { createdAt: -1 } }
            }
        })
        if (!application) {
            return res.status(404).json({
                message: "No Applications",
                success: false
            })
        }
        return res.status(200).json({
            application,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}


//admin will check how many user have applied for the jobs

export const getApplicants = async (req,res) =>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        })
        if(!job){
            return res.status(404).json({
                message:"Job not Found",
                success:false
            })
        }
        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateStatus = async (req,res) =>{
    try {
        const {status} = req.body
        const applicationId = req.params.id
        if(!status){
            return res.status(400).json({
                message:"Status is Required",
                success:false
            })
        }

        //Find the Application by Applicant id
        const application = await Application.findOne({_id:applicationId})
        if(!application){
            return res.status(404).json({
                message:"Application  not Found",
                success:false
            })
        }

        //update the status
        application.status = status.toLowerCase();
        await application.save()
        return res.status(200).json({
            message:"Status Updated Successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}