interface FeedbackCreateData {
    bug: string;
    comment: string;
    screenshot?: string;
}
export interface FeedbacksRepository{
    create : (data: FeedbackCreateData) => void;
}