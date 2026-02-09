"use client";
import React, { useState } from "react";
import { FileCode, ChevronRight, ChevronDown } from "lucide-react";

interface LineElement {
  type: 'keyword' | 'className' | 'method' | 'property' | 'string' | 'bracket' | 'text' | 'indent' | 'newline' | 'const' | 'value';
  text: string;
}

const createLineElement = (type: LineElement['type'], text: string = ''): LineElement => ({ type, text });

const experienceData = [
  {
    id: "aceint",
    filename: "AceInt.ts",
    company: "AceInt (Bootcoding)",
    role: "Software Development Intern",
    date: "Nov 2025 - Dec 2025",
    lines: [
      // Constants
      createLineElement('keyword', 'const'),
      createLineElement('text', ' '),
      createLineElement('const', 'COMPANY'),
      createLineElement('text', ' = '),
      createLineElement('string', '"AceInt (Bootcoding Pvt Ltd)"'),
      createLineElement('text', ';'),
      createLineElement('newline', ''),
      
      createLineElement('keyword', 'const'),
      createLineElement('text', ' '),
      createLineElement('const', 'ROLE'),
      createLineElement('text', ' = '),
      createLineElement('string', '"Software Development Intern"'),
      createLineElement('text', ';'),
      createLineElement('newline', ''),
      
      createLineElement('keyword', 'const'),
      createLineElement('text', ' '),
      createLineElement('const', 'DURATION'),
      createLineElement('text', ' = '),
      createLineElement('string', '"Nov 2025 - Dec 2025"'),
      createLineElement('text', ';'),
      createLineElement('newline', ''),
      createLineElement('newline', ''),
      
      // Experience object
      createLineElement('keyword', 'const'),
      createLineElement('text', ' '),
      createLineElement('const', 'experience'),
      createLineElement('text', ' = '),
      createLineElement('bracket', '{'),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('property', 'scalableArchitecture'),
      createLineElement('text', ': '),
      createLineElement('bracket', '{'),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'contentEngine'),
      createLineElement('text', ': '),
      createLineElement('string', '"Intelligent roadmap generation from diverse inputs"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'queueSystem'),
      createLineElement('text', ': '),
      createLineElement('string', '"Redis + BullMQ for async job processing"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'architecture'),
      createLineElement('text', ': '),
      createLineElement('string', '"Serverless design for high availability"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'performance'),
      createLineElement('text', ': '),
      createLineElement('string', '"99.9% uptime achieved"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('bracket', '},'),
      createLineElement('newline', ''),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('property', 'developerTooling'),
      createLineElement('text', ': '),
      createLineElement('bracket', '{'),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'npmPackage'),
      createLineElement('text', ': '),
      createLineElement('string', '"Internal LLM token usage tracker"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'costReduction'),
      createLineElement('text', ': '),
      createLineElement('string', '"35% reduction in engineering costs"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'teamProductivity'),
      createLineElement('text', ': '),
      createLineElement('string', '"Streamlined workflow for 12+ developers"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'downloads'),
      createLineElement('text', ': '),
      createLineElement('value', '850'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('bracket', '},'),
      createLineElement('newline', ''),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('property', 'platformSecurity'),
      createLineElement('text', ': '),
      createLineElement('bracket', '{'),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'authentication'),
      createLineElement('text', ': '),
      createLineElement('string', '"Secure auth flows implementation"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'authorization'),
      createLineElement('text', ': '),
      createLineElement('string', '"Role-Based Access Control (RBAC)"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'platform'),
      createLineElement('text', ': '),
      createLineElement('string', '"HireSkill security infrastructure"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'usersSecured'),
      createLineElement('text', ': '),
      createLineElement('value', '5000'),
      createLineElement('text', '+,'),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('bracket', '},'),
      createLineElement('newline', ''),
      
      createLineElement('bracket', '};'),
    ]
  },
  {
    id: "tbi",
    filename: "TBI_Incubator.ts",
    company: "TBI - GEU",
    role: "Project Trainee & Researcher",
    date: "Jun 2025 - Nov 2025",
    lines: [
      // Constants
      createLineElement('keyword', 'const'),
      createLineElement('text', ' '),
      createLineElement('const', 'COMPANY'),
      createLineElement('text', ' = '),
      createLineElement('string', '"Technology Business Incubator - GEU"'),
      createLineElement('text', ';'),
      createLineElement('newline', ''),
      
      createLineElement('keyword', 'const'),
      createLineElement('text', ' '),
      createLineElement('const', 'ROLE'),
      createLineElement('text', ' = '),
      createLineElement('string', '"Project Trainee & Researcher"'),
      createLineElement('text', ';'),
      createLineElement('newline', ''),
      
      createLineElement('keyword', 'const'),
      createLineElement('text', ' '),
      createLineElement('const', 'DURATION'),
      createLineElement('text', ' = '),
      createLineElement('string', '"Jun 2025 - Nov 2025"'),
      createLineElement('text', ';'),
      createLineElement('newline', ''),
      createLineElement('newline', ''),
      
      // Experience object
      createLineElement('keyword', 'const'),
      createLineElement('text', ' '),
      createLineElement('const', 'project'),
      createLineElement('text', ' = '),
      createLineElement('bracket', '{'),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('property', 'researchAndDevelopment'),
      createLineElement('text', ': '),
      createLineElement('bracket', '{'),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'program'),
      createLineElement('text', ': '),
      createLineElement('string', '"6-month intensive incubation program"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'project'),
      createLineElement('text', ': '),
      createLineElement('string', '"SecureSteps - Women Safety Platform"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'prototyping'),
      createLineElement('text', ': '),
      createLineElement('string', '"Scalable safety solutions from concept to MVP"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'progressToMVP'),
      createLineElement('text', ': '),
      createLineElement('string', '"100% completion in 6 months"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('bracket', '},'),
      createLineElement('newline', ''),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('property', 'agileMethodology'),
      createLineElement('text', ': '),
      createLineElement('bracket', '{'),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'framework'),
      createLineElement('text', ': '),
      createLineElement('string', '"Structured Agile development environment"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'versionControl'),
      createLineElement('text', ': '),
      createLineElement('string', '"Git workflow and clean architecture mastery"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'codeQuality'),
      createLineElement('text', ': '),
      createLineElement('string', '"Production-grade standards"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'sprintVelocity'),
      createLineElement('text', ': '),
      createLineElement('string', '"45% improvement over 6 months"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('bracket', '},'),
      createLineElement('newline', ''),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('property', 'deployment'),
      createLineElement('text', ': '),
      createLineElement('bracket', '{'),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'platform'),
      createLineElement('text', ': '),
      createLineElement('string', '"SecureSteps platform for real-world testing"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'userTesting'),
      createLineElement('text', ': '),
      createLineElement('string', '"Iterative improvements based on feedback"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'betaUsers'),
      createLineElement('text', ': '),
      createLineElement('value', '250'),
      createLineElement('text', '+,'),
      createLineElement('newline', ''),
      
      createLineElement('indent', '    '),
      createLineElement('property', 'satisfactionRate'),
      createLineElement('text', ': '),
      createLineElement('string', '"87% user satisfaction"'),
      createLineElement('text', ','),
      createLineElement('newline', ''),
      
      createLineElement('indent', '  '),
      createLineElement('bracket', '},'),
      createLineElement('newline', ''),
      
      createLineElement('bracket', '};'),
    ]
  }
];

const Experience = () => {
  const [activeFile, setActiveFile] = useState(experienceData[0]);
  const [isFolderOpen, setIsFolderOpen] = useState(true);

  const getColorClass = (type: string) => {
    switch (type) {
      case 'keyword':
        return 'text-[#C586C0]'; // Purple
      case 'className':
        return 'text-[#4EC9B0]'; // Cyan
      case 'method':
        return 'text-[#DCDCAA]'; // Yellow
      case 'property':
        return 'text-[#9CDCFE]'; // Light blue
      case 'string':
        return 'text-[#CE9178]'; // Orange
      case 'bracket':
        return 'text-[#FFD700]'; // Gold
      case 'const':
        return 'text-[#4FC1FF]'; // Bright blue for constants
      case 'value':
        return 'text-[#B5CEA8]'; // Green for numeric values
      case 'text':
        return 'text-[#d4d4d4]'; // Default text
      case 'indent':
        return 'text-transparent select-none';
      default:
        return 'text-[#d4d4d4]';
    }
  };

  const renderLine = (lines: LineElement[], startIdx: number) => {
    const lineParts: LineElement[] = [];
    let idx = startIdx;

    while (idx < lines.length && lines[idx].type !== 'newline') {
      lineParts.push(lines[idx]);
      idx++;
    }

    return { parts: lineParts, nextIdx: idx < lines.length ? idx + 1 : idx };
  };

  const convertLinesToRows = (lines: LineElement[]): LineElement[][] => {
    const rows: LineElement[][] = [];
    let idx = 0;

    while (idx < lines.length) {
      const { parts, nextIdx } = renderLine(lines, idx);
      rows.push(parts);
      idx = nextIdx;
    }

    return rows;
  };

  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-7xl bg-[#1e1e1e] text-white font-mono rounded-lg overflow-hidden shadow-2xl border border-gray-800">
        <div className="border-b border-gray-700 px-4 py-3 text-sm">
          <span className="text-gray-400">Work Experience</span>
        </div>

        <div className="flex h-[calc(80vh-80px)]">
        {/* SIDEBAR */}
        <div className="w-64 bg-[#252526] border-r border-gray-700 flex flex-col">
          <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Explorer
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div
              onClick={() => setIsFolderOpen(!isFolderOpen)}
              className="flex items-center px-4 py-1.5 cursor-pointer hover:bg-[#2a2d2e] text-sm"
            >
              {isFolderOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              <span className="ml-1 text-gray-300">WORK-HISTORY</span>
            </div>

            {isFolderOpen && (
              <div className="ml-2">
                {experienceData.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveFile(item)}
                    className={`flex items-center px-8 py-1.5 cursor-pointer text-sm transition-colors ${
                      activeFile.id === item.id
                        ? "bg-[#37373d] text-white border-l-2 border-blue-500"
                        : "text-gray-400 hover:bg-[#2a2d2e] hover:text-gray-200"
                    }`}
                  >
                    <FileCode size={16} className="mr-2" />
                    {item.filename}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* EDITOR AREA */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e]">
          {/* Tab */}
          <div className="flex items-center bg-[#2d2d2d] border-b border-gray-700">
            <div className="flex items-center px-4 py-2 bg-[#1e1e1e] border-r border-gray-700 text-sm">
              <FileCode size={14} className="mr-2 text-blue-400" />
              {activeFile.filename}
            </div>
          </div>

          {/* Code Editor with custom scrollbar */}
          <div className="flex-1 overflow-auto custom-scrollbar">
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 14px;
                height: 14px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: #1e1e1e;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #424242;
                border: 3px solid #1e1e1e;
                border-radius: 7px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #4e4e4e;
              }
              .custom-scrollbar::-webkit-scrollbar-corner {
                background: #1e1e1e;
              }
            `}</style>
            
            <div className="p-4">
              {convertLinesToRows(activeFile.lines).map((parts, lineNum) => (
                <div key={lineNum} className="flex leading-6 hover:bg-[#2a2d2e]/50">
                  <span className="inline-block w-12 text-right pr-4 text-gray-600 select-none">
                    {lineNum + 1}
                  </span>
                  <div className="flex-1">
                    {parts.map((part, partIdx) => (
                      <span key={partIdx} className={getColorClass(part.type)}>
                        {part.text}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Experience;