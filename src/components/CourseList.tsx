import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

type CourseGoalListProps = {
    goals: CGoal[],
    onDeleteGoal: (id: number) => void;
}

export default function CourseList({ goals, onDeleteGoal }: CourseGoalListProps) {
    if (goals.length === 0) {
        return <InfoBox mode='hint'>You have no course goal yet</InfoBox>
    }

    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = <InfoBox mode="warning" severity="high">
            Youre collecting a lot of goals. Dont put too much on your plate
        </InfoBox>
    }
    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal
                            id={goal.id}
                            title={goal.title}
                            onDelete={onDeleteGoal}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>

        </>
    )
}