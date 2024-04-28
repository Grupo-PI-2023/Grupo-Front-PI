
export type Knowledge = {
    id?: string 
    activityDescription: string 
    activityName: string 
    eventId?: string 
}

export interface IKnowledgeRepository{
    create(Knowledge: Knowledge): Promise<Knowledge>;
    read(): Promise<Knowledge[]>;
    readActivity(id: string): Promise<Knowledge | null>;
    update(Knowledge: Knowledge): Promise<Knowledge>;
    delete(id: string): Promise<Knowledge>;
}