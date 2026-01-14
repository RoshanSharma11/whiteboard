# Collaborative Whiteboard for Google Meet

> **Work in Progress** - This application is currently under active development. Many features are still being implemented and will be completed soon.

A shared whiteboard add-on for Google Meet that enables real-time collaboration during virtual meetings. This tool solves a common problem with traditional screen sharing where all participants are limited to viewing only what the presenter shows.

## The Problem

In typical video conferencing scenarios with screen sharing:
- All participants see the exact same view of the shared content
- Participants cannot explore different parts of a shared board independently
- When someone needs to see a different section, they must interrupt the meeting to ask the presenter to navigate there
- This constant back-and-forth disrupts the flow of the meeting (especially in educational settings)

## The Solution

This collaborative whiteboard allows:
- **Independent Navigation**: Each participant can view and explore different parts of the whiteboard simultaneously without disrupting others
- **Collaborative Drawing**: Meeting facilitators can write and draw on the whiteboard, and can grant permission to participants to contribute as well
- **Real-time Synchronization**: All changes are synchronized in real-time across all participants
- **Flexible Permissions**: Control who can edit vs. who can only view the whiteboard

## Use Case Example

In an educational context:
- A **professor** draws a complex diagram or writes equations on the whiteboard during a lecture
- **Students** can independently pan around to examine different parts of the board they need to focus on
- Students with permission can add their own notes or attempt problems on the whiteboard
- Everyone stays engaged without interrupting the class flow to request navigation changes

This same pattern applies to:
- Business meetings where team members need to brainstorm collaboratively
- Design reviews where stakeholders want to examine different details
- Training sessions where instructors and trainees work together
- Any scenario requiring shared visual collaboration with flexible viewing

## Tech Stack

Built with:
- [Next.js](https://nextjs.org/) - React framework
- [tldraw](https://tldraw.dev/) - Collaborative canvas
- [Liveblocks](https://liveblocks.io) - Real-time collaboration infrastructure
- TypeScript

## Status

This project is currently in development. Core features are being implemented and the Google Meet integration is being finalized. Check back soon for updates!

## License

The `tldraw` library is provided under the [tldraw license](https://github.com/tldraw/tldraw/blob/main/LICENSE.md).
