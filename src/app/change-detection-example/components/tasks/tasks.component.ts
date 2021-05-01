import { Component, OnInit } from "@angular/core";
import { Task } from "../../task.model";

export interface TaskBoard {
  title: string;
  items: Task[];
}

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  taskBoards: TaskBoard[] = [
    {
      title: "TODO",
      items: [
        {
          id: 0,
          title: "Culpa anim cillum do enim.",
          description:
            "Ipsum labore id commodo ea laboris mollit nisi occaecat elit deserunt exercitation qui consequat adipisicing. Amet magna qui nostrud aliqua cillum aute nisi. Sint quis do voluptate aute ut amet nisi id velit et do sunt labore.\r\n",
          priority: "low",
        },
        {
          id: 1,
          title:
            "Ea id officia labore consequat adipisicing sit incididunt nisi nostrud reprehenderit consequat anim excepteur.",
          description:
            "Id deserunt veniam consectetur eiusmod excepteur velit cillum fugiat. Lorem qui sit ex cillum deserunt consectetur. Cupidatat irure eu ea sunt. Laboris cupidatat enim qui ad ad veniam ipsum velit aliquip nostrud labore. Aliquip do amet id ea do dolor consequat. In non in reprehenderit qui Lorem magna.\r\n",
          priority: "low",
        },
        {
          id: 2,
          title: "Lorem excepteur qui aliquip magna aute est et laborum.",
          description:
            "Dolor pariatur aliquip cupidatat do commodo sunt commodo cupidatat elit culpa laborum anim ad pariatur. Dolor minim occaecat fugiat exercitation excepteur elit esse adipisicing nostrud ea dolor cupidatat minim consectetur. Consequat dolore nisi esse non ea quis aliquip non commodo incididunt veniam exercitation ad id.\r\n",
          priority: "high",
        },
        {
          id: 3,
          title:
            "Nostrud laborum nostrud in fugiat veniam cillum officia dolore.",
          description:
            "Sit duis cupidatat esse incididunt nulla elit nostrud veniam exercitation aute officia enim. Adipisicing adipisicing eu tempor velit officia dolor officia non sit nulla cillum ea anim nulla. Velit laborum exercitation eiusmod elit ut anim magna ex ad. Sunt qui incididunt eiusmod id incididunt reprehenderit et ad labore deserunt. Voluptate culpa deserunt deserunt sint qui aliquip proident.\r\n",
          priority: "low",
        },
        {
          id: 4,
          title: "Pariatur dolore quis aute irure dolore elit eu sint velit.",
          description:
            "Non ex duis occaecat eu dolor culpa reprehenderit. Minim est eu dolore laboris id commodo ea non ex pariatur nostrud labore. Deserunt exercitation aliquip Lorem dolore nostrud laborum ullamco ut. Fugiat tempor velit laboris reprehenderit. Aute dolor esse cillum cillum ad. Fugiat cillum aute deserunt minim irure minim laborum non dolore. Veniam duis sint reprehenderit nostrud.\r\n",
          priority: "high",
        },
      ],
    },
    {
      title: "DONE",
      items: [],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
